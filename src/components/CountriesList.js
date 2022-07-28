import { useParams, Link } from 'react-router-dom';

// const [countries, setCountries] = useState(null);

// useEffect(() => {
//   axios
//     .get('https://ih-countries-api.herokuapp.com/countries')
//     .then((countryData) => {
//       setCountries(countryData);
//     })
//     .catch((err) => console.log('something went wrong', err));
// }, []);

function CountriesList(props) {
  console.log(props.countries);
  return (
    <div>
      {props.countries.map((country) => {
        return (
          <div className="list-group">
            <Link
              to={`/${country.alpha3Code}`}
              className="list-group-item list-group-item-action"
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png
`}
              ></img>{' '}
              <br />
              {country.name.common}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
