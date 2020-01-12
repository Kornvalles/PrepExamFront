import React, { useState, useEffect } from "react";
import {planetlist} from '../settings';
import JSONPretty from 'react-json-pretty';

const Planets = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(planetlist);
      res
        .json()
        .then(res => setPlanets(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  },[]);

  return (
    <div>
      <JSONPretty id="json-pretty" data={planets}></JSONPretty>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default Planets;



