"use client";

import { useEffect, useState } from "react";
import { getCountryFlags, getCountryInfo } from "../countries.api";
import { Country, CountryFlag } from "@/interfaces/countries.interfaces";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  params: { countryCode: string };
}

export default function CountryPage({ params }: Props) {
  const { countryCode } = params;
  const [country, setCountry] = useState<Country | null>(null);
  const [countryFlag, setCountryFlag] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const [countryData, flagsData] = await Promise.all([
          getCountryInfo(countryCode),
          getCountryFlags(),
        ]);

        setCountry(countryData);

        const code = countryCode.toUpperCase();

        const flagData = flagsData.find(
          (flag: CountryFlag) => flag.iso2 === code || flag.iso3 === code
        );

        if (flagData) {
          setCountryFlag(flagData.flag);
        } else {
          console.warn(
            `No se encontró bandera para el código de país: ${countryCode}`
          );
          setCountryFlag(null);
        }
      } catch (error) {
        console.error("Error al obtener los datos del país:", error);
        setCountry(null);
        setCountryFlag(null);
      }
    };

    fetchCountryData();
  }, [countryCode]);

  if (!country || !countryFlag) {
    return <div>Loading...</div>;
  }
  const backUpImage = "https://placehold.co/600x400.png";

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mt-20">
        <Link href="/countries">
          <Button
            variant={"outline"}
            className="mb-10"
          >
            Back to countries
          </Button>
        </Link>
      </div>

      <section className="flex flex-col items-center justify-center gap-4 mt-10 pb-20">
        <h1 className="title text-center">{country.officialName}</h1>
        <Image
          src={countryFlag || backUpImage}
          alt={`${country.name} flag`}
          width={800}
          height={700}
          className="h-3/4 w-3/4 rounded-xl object-cover"
        />
      </section>

      <section className="flex flex-col items-center justify-center gap-4 mt-10 pb-20">
        <h2 className="title text-center text-3xl">Países Fronterizos</h2>
        <ul className="flex flex-col lg:flex-row max-w-4xl flex-wrap gap-10 mt-10 pb-20">
          {country.borderCountries.map((borderCountry, index) => (
            <li key={index}>
              <Link href={`/countries/${borderCountry.countryCode}`}>
                <Card className="flex justify-center items-center w-40 h-40 rounded-xl pt-4">
                  <CardContent>{borderCountry.commonName}</CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
