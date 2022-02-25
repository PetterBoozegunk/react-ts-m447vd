import React, { Component } from 'react';
import { render } from 'react-dom';
import { Country } from '../../models/country/country';
import { CountryListItem } from '../country-list-item/country-list-item'

import './country-list.css';

export function CountryList({ countries, onClickCountry }) {
  const listItems = countries.map((country: Country, index: number) => (
    <CountryListItem
      country={country}
      index={index}
      onClickCountry={onClickCountry}
    />
  ));

  return <ul className="list-countries">{listItems}</ul>;
}
