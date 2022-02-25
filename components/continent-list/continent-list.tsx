import React, { Component } from 'react';
import { render } from 'react-dom';
import { Country } from '../../models/country/country';

import './continent-list.css';

export function ContinentList({ continents, onClickContinent }) {
  const listItems = continents.map((continent: string, index: number) => (
    <li key={index} onClick={onClickContinent}>
      {continent}
    </li>
  ));

  return <ul className="list-continents">{listItems}</ul>;
}
