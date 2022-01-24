import React from "react";

//IMAGE IMPORTS
import snow from "../assets/snow.png";
import drizzle from "../assets/drizzle.png";
import fog from "../assets/fog.png";
import rain from "../assets/rain.png";
import smog from "../assets/smog.png";
import sunny from "../assets/sunny.png";
import thunderstorm from "../assets/thunderstorm.png";
import cloudy from "../assets/cloudy.png";

//STYLED COMPONENTS IMPORTS
import {
  Container,
  CardWrapper,
  Wrapper,
  Image,
  Text,
  TextHeader,
  TextSubtitle,
  Item,
  DataHeader,
  DataContainer,
  Row,
  DateCom,
  CityCom,
} from "../components/styles/DisplayElements";

//Utils import
import { days, months, secToTime } from "./utils/utils";

const CurrentWeather = ({
  temp,
  maxTemp,
  minTemp,
  humidity,
  type,
  city,
  windSpeed,
  country,
  sunrise,
  sunset,
}) => {
  //ICON SET FUNCTION
  let icon = null;
  if (type === "Thunderstorm") {
    icon = thunderstorm;
  } else if (type === "Drizzle") {
    icon = drizzle;
  } else if (type === "Rain") {
    icon = rain;
  } else if (type === "Snow") {
    icon = snow;
  } else if (type === "Clear") {
    icon = sunny;
  } else if (type === "Clouds") {
    icon = cloudy;
  } else if (type === "Smog") {
    icon = smog;
  } else {
    icon = fog;
  }

  //Data Reformatting
  const currentDate = new Date();
  const date = `${days[currentDate.getDay()]}, ${currentDate.getDate()} ${
    months[currentDate.getMonth()]
  }`;
  const sunriseStr = secToTime(sunrise);
  const sunsetStr = secToTime(sunset);

  return (
    <Container>
      <CityCom>
        {city}, {country}
      </CityCom>
      <CardWrapper>
        <Image src={icon} />
        <Text>
          <Text>
            <TextHeader>{`${Number(temp).toFixed(1)}℃`}</TextHeader>
            <TextSubtitle>{type}</TextSubtitle>
          </Text>
          <DateCom>{date}</DateCom>
        </Text>
      </CardWrapper>
      <Wrapper>
        <Row>
          <Item>
            <DataHeader> Minimum Temperature</DataHeader>
            <DataContainer>{`${Number(minTemp).toFixed(2)}℃`}</DataContainer>
          </Item>
          <Item>
            <DataHeader> Humidity</DataHeader>
            <DataContainer> {`${humidity}%`}</DataContainer>
          </Item>
          <Item>
            <DataHeader>Sunrise Time</DataHeader>
            <DataContainer> {sunriseStr}</DataContainer>
          </Item>
        </Row>
        <Row>
          <Item>
            <DataHeader>Maximum Temperature</DataHeader>
            <DataContainer>{`${Number(maxTemp).toFixed(2)}℃`}</DataContainer>
          </Item>
          <Item>
            <DataHeader>Wind Speed</DataHeader>
            <DataContainer> {`${windSpeed}`}</DataContainer>
          </Item>
          <Item>
            <DataHeader>Sunset Time</DataHeader>
            <DataContainer> {sunsetStr}</DataContainer>
          </Item>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default CurrentWeather;
