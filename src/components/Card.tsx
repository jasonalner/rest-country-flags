import { ICountry } from "../types";
import "./Card.css";
import { Link } from "react-router-dom";

interface Props {
  country: ICountry;
}

function Card({ country }: Readonly<Props>) {
  return (
    <div className="card">
      <Link to={`/country/${country.name.common}`}>
        <div className="top">
          <img className="country-flag" src={country.flags.png} alt="" />
        </div>
      </Link>
      <div className="bottom">
        <h2 className="country-name">{country.name.common}</h2>
        <p className="country-pop">
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
        <p className="country-region">
          <strong>Region:</strong> {country.region}
        </p>
        <p className="country-capital">
          <strong>Capital:</strong> {country.capital}
        </p>
      </div>
    </div>
  );
}

export default Card;
