import { BorderCountry, Country, CountryData, CountryFlag } from "@/interfaces/countries.interfaces";


export async function getAvailableCountries() { 
  const dataCountries = await fetch('http://localhost:4000/api/countries/AvailableCountries');
  return await dataCountries.json();
}

export async function getCountryInfo(countryCode: string): Promise<Country> { 
  try {
    const response = await fetch(`http://localhost:4000/api/countries/CountryInfo/${countryCode}`);
    const data: CountryData = await response.json();

    const bordersData: BorderCountry[] = data.borders || [];

    const borderCountries = bordersData.map((borderCountry) => ({
      commonName: borderCountry.commonName,
      countryCode: borderCountry.countryCode,
    }));

    const country: Country = {
      countryCode: data.countryCode, 
      name: data.name,
      officialName: data.officialName,
      borderCountries: borderCountries,
    };

    return country;
  } catch (error) {
    console.error("Error fetching country info:", error);
    throw error;
  }
}


export async function getCountryFlags(): Promise<CountryFlag[]> {
  try {
    const response = await fetch(`http://localhost:4000/api/countries/countriesFlags`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching country flags:", error);
    throw error;
  }
}


