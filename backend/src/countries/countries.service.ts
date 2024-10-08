import { Injectable } from '@nestjs/common';
//import { CreateCountryDto } from './dto/create-country.dto';
//import { UpdateCountryDto } from './dto/update-country.dto';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class CountriesService {
  constructor(private readonly httpService: HttpService) {}

  async getAvailableCountries() {
    const url = 'https://date.nager.at/api/v3/AvailableCountries';

    return this.httpService.get(url).pipe(map((response) => response.data));
  }

  async getCountryInfo(countryCode: string) {
    const url = `https://date.nager.at/api/v3/CountryInfo/${countryCode}`;

    return this.httpService.get(url).pipe(map((response) => response.data));
  }

  async getCountryPopulation(country: string) {
    const url = 'https://countriesnow.space/api/v0.1/countries/population';
    const data = {
      country: country,
    };

    return this.httpService.post(url, data).pipe(
      map((response) => response.data.data), // Procesar la respuesta
      catchError((error) => {
        console.error('Error fetching population data:', error);
        return throwError(() => new Error('Failed to fetch population data'));
      }),
    );
  }

  async getCountriesFlags() {
    const url = 'https://countriesnow.space/api/v0.1/countries/flag/images';

    return this.httpService.get(url).pipe(map((response) => response.data));
  }
}
