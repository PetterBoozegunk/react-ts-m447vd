import React, { Component } from 'react';
import { render } from 'react-dom';
import { ContinentList } from './components/continent-list/continent-list';
import { Country } from './models/country/country';
import { Utils } from './utils/utils';

import './style.css';
import { CountryList } from './components/country-list/country-list';

interface AppProps {
  countries: Country[];
  continents: string[];
  countriesByContinent: Country[];
}

class App extends Component<AppProps> {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      continents: [],
      countriesByContinent: [],
    };
  }

  componentDidMount() {
    fetch('https://cdn.utopiamusic.com/code-test/frontend/countries.json')
      .then((res) => res.json())
      .then((countries: Country[]) => {
        this.setState({
          countries: countries,
          continents: Utils.getContinents(countries),
          countriesByContinent: [],
        });
      });
  }

  render() {
    const { countries, continents, countriesByContinent } = this.state;

    const onClickContinent = (event) => {
      const continent: string = event.target.innerText;
      const countriesByContinent = Utils.getCountriesByContinent(
        continent,
        countries
      );

      this.setState({
        countriesByContinent: countriesByContinent,
      });
    };

    const onClickCountry = (event) => {
      const countryName: string = event.target.innerText;
      const flagUrl = Utils.getFlagUrl(
        countryName,
        this.state.countriesByContinent
      );

      console.log(flagUrl);
    };

    return (
      <main>
        <div className="logo"></div>
        <p>
          Select a continent and click on the countries you want to highlight
        </p>
        <ContinentList
          continents={continents}
          onClickContinent={onClickContinent}
        />
        <CountryList
          countries={countriesByContinent}
          onClickCountry={onClickCountry}
        />
      </main>
    );
  }
}

render(<App />, document.getElementById('root'));
