export interface Country {
  countryCode: string;
  name: string;
  officialName: string;
  borderCountries: BorderCountry[];
}

export interface CountryFlag {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
  code: string;
  flagUrl: string;
}

export interface BorderCountry {
  commonName: string;
  countryCode: string;
}

export interface CountryData {
  countryCode: string;
  name: string;
  officialName: string;
  borders: BorderCountry[] | null;
}