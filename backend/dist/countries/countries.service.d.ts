import { HttpService } from '@nestjs/axios';
export declare class CountriesService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getAvailableCountries(): Promise<import("rxjs").Observable<any>>;
    getCountryInfo(countryCode: string): Promise<import("rxjs").Observable<any>>;
    getCountryPopulation(country: string): Promise<import("rxjs").Observable<any>>;
    getCountriesFlags(): Promise<import("rxjs").Observable<any>>;
}
