import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import { Country } from '../../models/country/country';

export function CountryListItem({ country, index, onClickCountry }) {
  const [isActive, setActive] = useState(false);

  const className = isActive ? 'selected' : null;

  const toggleActive = () => {
    setActive(!isActive);
  };

  const onClick = (event) => {
    onClickCountry(event);
    toggleActive();
  };

  return (
    <li key={index} onClick={onClick} className={className}>
      {country.name}
    </li>
  );
}
