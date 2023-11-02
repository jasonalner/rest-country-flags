import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Country.css";
import { ICountry } from "../types";

const Country = () => {
  const { id } = useParams(); // Get the country ID from the URL
  const [country, setCountry] = useState<ICountry | null>(null);

  useEffect(() => {
    // Fetch the individual country's data based on the ID
    async function fetchCountry() {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${id}`);
        if (!response.ok) {
          throw new Error("HTTP Error! Status: ${response.status}");
        }
        const countryData: ICountry[] = await response.json();
        setCountry(countryData[0] ?? null);
      } catch (error) {
        console.log("Error:", error);
      }
    }
    fetchCountry();
  }, [id]);

  if (!country) {
    return <div>Loading...</div>; // You can replace this with a loading component or message
  }

  return (
    <div className="country-container">
      <div className="country-img">
        <img src={country.flags.png} alt="" />
      </div>
      <div className="country-info">
        <h1>{country.name.common}</h1>
        <div className="left">
          <p>
            <strong>Native Name:</strong>
          </p>
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
        <div className="right"></div>
        <p>
          <strong>Languages:</strong> {country.languages.eng}
        </p>
        {/* Add more country details here */}
      </div>
    </div>
  );
};

export default Country;
