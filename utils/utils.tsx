import { Country } from '../models/country/country';

export class Utils {
  static getContinents(countries: Country[]): string[] {
    const continents = countries.slice().map((country: Country) => {
      return country.continent;
    });

    return [...new Set(continents)].sort((a, b) => {
      return a > b ? 1 : -1;
    });
  }

  static getCountriesByContinent(
    continent: string,
    countries: Country[]
  ): Country[] {
    return countries.slice().filter((country: Country) => {
      return country.continent === continent;
    });
  }

  static getFlagUrl(
    countryName: string,
    countriesByContinent: Country[]
  ): string {
    return countriesByContinent
      .slice()
      .filter((country) => {
        return country.name === countryName;
      })
      .map((country) => {
        return country.flags.shift();
      })
      .shift();
  }
}
