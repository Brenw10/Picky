import React, { useEffect, useState } from 'react';
import City from '../api/City';
import Dropdown from '../components/Dropdown';

export default function ({ setCity, city }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    City.getAll().then(({ data }) => setCities(data));
  }, []);

  return (
    <Dropdown items={cities} setSelected={setCity} displayField='name' text={city?.name || 'Cidades'} />
  );
}