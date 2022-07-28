import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CountryDetails(props) {
  const [foundCountry, setFoundCountry] = useState(null);

  const { countryCode } = useParams();
  console.log('country code', countryCode);

  useEffect(() => {
    const country = props.countries.find((country) => {
      return country.alpha3Code === countryCode;
    });

    if (country) {
      setFoundCountry(country);
    }
  }, [countryCode]);

  return (
    <div>
      {!foundCountry && <h1>country not found</h1>}

      {foundCountry && (
        <div>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
            className="large-img"
          ></img>
          <h2>{foundCountry.name.common}</h2>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{foundCountry.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {foundCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {foundCountry.borders.map((border) => {
                      console.log(border);
                      return (
                        <div>
                          <Link to={`/${border}`}>{border}</Link>{' '}
                        </div>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
