import React, { useEffect, useState } from "react";
import Search from "./Search";
import Card from "./Card";
import "./Results.css";

import { Filter } from "./Filter";

const url =
  "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,tld,languages";

function Results() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getCountries() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("HTTP Eerror! Status: ${response.status}");
        }
        const countriesData = await response.json();
        setCountries(countriesData);
        console.log(countriesData)
      } catch (error) {
        console.log("Error:", error);
      }
    }
    getCountries();

  }, []);
  
  const handleSearchChange = (value) => {
    setSearch(value);
  };
  
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase()) &&
      (selectedRegion === "" ||
        country.region.toLowerCase() === selectedRegion.toLowerCase())
  );

  return (
    <main>
      <div className="searchFilterContainer">
        <Search search={search} onSearchChange={handleSearchChange} />
        <Filter
          selectedRegion={selectedRegion}
          onRegionChange={handleRegionChange}
        ></Filter>
      </div>
      <div className="results">
        {filteredCountries.map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </div>
    </main>
  );
}

export default Results;
