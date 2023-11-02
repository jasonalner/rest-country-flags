import { ICountry } from "../types";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

interface Props {
  country: ICountry;
}

function Card({ country }: Readonly<Props>) {
  return (
    <div className={styles.card}>
      <Link to={`/country/${country.name.common}`}>
        <div className={styles.card_top}>
          <img className={styles.card_country_flag} src={country.flags.png} alt="" />
        </div>
      </Link>
      <div className={styles.card_bottom}>
        <h2>{country.name.common}</h2>
        <p>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital}
        </p>
      </div>
    </div>
  );
}

export default Card;
