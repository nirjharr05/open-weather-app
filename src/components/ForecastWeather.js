import React from "react";
import {
  ForecastContainer,
  Block,
  Day,
  TempHolder,
  TempHeader,
  TempText,
} from "./styles/DisplayElements";
import { days } from "./utils/utils";

const ForecastWeather = ({ data }) => {
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
          <TempHeader>Type</TempHeader>
          <TempText>{`${item.type}`}</TempText>
        </TempHolder>
        <TempHolder>
          <TempHeader>Feel Like</TempHeader>
          <TempText>{`${Number(item.feelTemp).toFixed(2)} ℃`}</TempText>
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
