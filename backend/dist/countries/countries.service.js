"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const operators_1 = require("rxjs/operators");
const operators_2 = require("rxjs/operators");
const rxjs_1 = require("rxjs");
let CountriesService = class CountriesService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getAvailableCountries() {
        const url = 'https://date.nager.at/api/v3/AvailableCountries';
        return this.httpService.get(url).pipe((0, operators_1.map)((response) => response.data));
    }
    async getCountryInfo(countryCode) {
        const url = `https://date.nager.at/api/v3/CountryInfo/${countryCode}`;
        return this.httpService.get(url).pipe((0, operators_1.map)((response) => response.data));
    }
    async getCountryPopulation(country) {
        const url = 'https://countriesnow.space/api/v0.1/countries/population';
        const data = {
            country: country,
        };
        return this.httpService.post(url, data).pipe((0, operators_1.map)((response) => response.data.data), (0, operators_2.catchError)((error) => {
            console.error('Error fetching population data:', error);
            return (0, rxjs_1.throwError)(() => new Error('Failed to fetch population data'));
        }));
    }
    async getCountriesFlags() {
        const url = 'https://countriesnow.space/api/v0.1/countries/flag/images';
        return this.httpService.get(url).pipe((0, operators_1.map)((response) => response.data));
    }
};
exports.CountriesService = CountriesService;
exports.CountriesService = CountriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], CountriesService);
//# sourceMappingURL=countries.service.js.map