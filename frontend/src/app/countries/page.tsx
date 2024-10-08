"use client";

import { SetStateAction, useEffect, useState } from "react";
import { GlobeComponent } from "@/components/globeComponent.jsx";
import { getAvailableCountries, getCountryFlags } from "./countries.api";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CountryFlag } from "@/interfaces/countries.interfaces";

export default function CountriesPage() {
  const backUpImage = "https://placehold.co/600x400.png";
  const [countries, setCountries] = useState<
    { countryCode: string; name: string }[]
  >([]);
  const [countriesFlag, setCountriesFlag] = useState<CountryFlag[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getAvailableCountries();
        const flag = await getCountryFlags();
        setCountriesFlag(flag);
        console.log(flag);
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const totalPages = Math.ceil(countries.length / countriesPerPage);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginate = (pageNumber: SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <section className="flex flex-col items-center justify-center gap-4 mt-10 pb-20">
        <h1 className="title text-center">Countries of the World</h1>
        <GlobeComponent />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pb-20">
        {currentCountries.map((country) => {
          const flag = countriesFlag.find(
            (flag) =>
              flag.iso2.toLocaleLowerCase() ===
              country.countryCode.toLocaleLowerCase()
          );
          return (
            <Link
              href={`/countries/${country.countryCode}`}
              key={country.countryCode}
            >
              <Card className="h-60 w-52 rounded-xl pt-4">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    {country.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h2 className="">Country Code: {country.countryCode}</h2>
                </CardContent>
                <CardFooter className="flex justify-center items-center gap-2">
                  <Image
                    src={flag ? flag.flag : backUpImage}
                    alt={flag ? `Flag of ${country.name}` : "Backup flag"}
                    width={100}
                    height={100}
                    className="h-10 w-20 aspect-square rounded-xl object-cover"
                  />
                </CardFooter>
              </Card>
            </Link>
          );
        })}
      </section>

      <div className="flex justify-center items-center gap-2 pb-8">
        <Button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          variant="outline"
        >
          Previous
        </Button>
        <span className="mx-2">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          variant="outline"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
