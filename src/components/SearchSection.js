import React, { useState, useEffect } from "react";
import {
  Container,
  ContainerSearch,
  ContainerDisplay,
  Search,
  Input,
  Button,
  Header,
  H1,
  H2,
} from "./styles/SearchElements";

import { api, curWeather, forWeather } from "./api/fetchWeather";

import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchSection = () => {
  const [query, setQuery] = useState("Kolkata");
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecastWeather, setForecastWeather] = useState([]);

  //GET WEATHER
  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async (e) => {
    try {
      //current weather
      let res1 = await fetch(
        `${api.base}weather?q=${query}&appid=${api.key}`
      ).then((res) => res.json());
      const newCurWeatherObject = curWeather(res1);
      setCurrentWeather(newCurWeatherObject);

      //forecast weather
      let res2 = await fetch(
        `${api.base}forecast?q=${query}&appid=${api.key}`
      ).then((res) => res.json());
      const newForWeatherObject = forWeather(res2);
      setForecastWeather(newForWeatherObject);

      setQuery("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <ContainerSearch>
        <Header>
          <H1>Weather App</H1>
          <H2>Search for any city to get started</H2>
        </Header>
        <Search>
          <Input
            type="search"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button onClick={getWeather}>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </Search>
      </ContainerSearch>
      <ContainerDisplay>
        <CurrentWeather {...currentWeather} />
      </ContainerDisplay>
      <ContainerDisplay>
        <ForecastWeather data={forecastWeather} />
      </ContainerDisplay>
    </Container>
  );
};

export default SearchSection;
