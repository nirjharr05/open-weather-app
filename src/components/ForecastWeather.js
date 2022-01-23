import React from "react";
import {
  ForecastContainer,
  Block,
  Day,
  TempHolder,
  TempHeader,
  TempText,
} from "./styles/DisplayElements";

const ForecastWeather = ({ data }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date();
  const checkDay = (day) => {
    if (day + currentDate.getDay() > 6) {
      return day + currentDate.getDay() - 7;
    } else {
      return day + currentDate.getDay();
    }
  };

  const blocks = data.map((item, idx) => {
    return (
      <Block key={idx}>
        <Day>{days[checkDay(idx + 1)]}</Day>
        <TempHolder>
          <TempHeader>Min Temp</TempHeader>
          <TempText>{`${Number(item.minTemp - 273).toFixed(2)} ℃`}</TempText>
        </TempHolder>
        <TempHolder>
          <TempHeader>Max Temp</TempHeader>
          <TempText>{`${Number(item.maxTemp - 273).toFixed(2)} ℃`}</TempText>
        </TempHolder>
      </Block>
    );
  });
  return (
    <React.Fragment>
      <ForecastContainer>{blocks}</ForecastContainer>
    </React.Fragment>
  );
};

export default ForecastWeather;
/*
<Day></Day>
          <TempHolder>
            <MinTemp>{data[0].MinTemp}</MinTemp>
            <MaxTemp>{data[0].MaxTemp}</MaxTemp>
          </TempHolder>
*/
