import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import countryData from './countries.json';

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('https://ih-countries-api.herokuapp.com/countries')
  //     .then((countryData) => {
  //       setCountries(countryData);
  //     })
  //     .catch((err) => console.log('something went wrong', err));
  // }, []);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((res) => res.json())
      .then((json) => setCountries(json))
      .catch((err) => console.log('something went wrong', err));
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <CountriesList countries={countries} />
          </div>
          <div className="col-7">
            <Routes>
              <Route
                path="/:countryCode"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
