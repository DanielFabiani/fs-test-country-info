import { CountriesService } from './countries.service';
export declare class CountriesController {
    private readonly countriesService;
    constructor(countriesService: CountriesService);
    getAvailableCountries(): Promise<import("rxjs").Observable<any>>;
    getCountryInfo(countryCode: string): Promise<import("rxjs").Observable<any>>;
    getCountryPopulation(countryName: string): Promise<import("rxjs").Observable<any>>;
    getCountriesFlags(): Promise<import("rxjs").Observable<any>>;
}
