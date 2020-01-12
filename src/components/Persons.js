import React, { useState, useEffect } from "react";
import {peoplelist} from '../settings';
import JSONPretty from 'react-json-pretty';

const Persons = () => {
  const [hasError, setErrors] = useState(false);
  const [persons, setPersons] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(peoplelist);
      res
        .json()
        .then(res => setPersons(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  },[]);

  return (
    <div>
      <JSONPretty id="json-pretty" data={persons}></JSONPretty>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default Persons;