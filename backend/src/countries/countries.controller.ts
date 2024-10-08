import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';
//import { CreateCountryDto } from './dto/create-country.dto';
//import { UpdateCountryDto } from './dto/update-country.dto';

@Controller('countries') // Prefijo para todas las rutas dentro del controlador
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get('availableCountries')
  async getAvailableCountries() {
    return this.countriesService.getAvailableCountries();
  }

  @Get('countryInfo/:countryCode')
  async getCountryInfo(@Param('countryCode') countryCode: string) {
    return this.countriesService.getCountryInfo(countryCode);
  }

  @Get('population/:countryName')
  async getCountryPopulation(@Param('countryName') countryName: string) {
    return this.countriesService.getCountryPopulation(countryName);
  }

  @Get('countriesFlags')
  async getCountriesFlags() {
    return this.countriesService.getCountriesFlags();
  }
}
