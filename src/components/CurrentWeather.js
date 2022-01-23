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
  TopBanner,
  BottomBanner,
  CardWrapper,
  Wrapper,
  Image,
  Text,
  TextHeader,
  TextSubtitle,
  Item,
  DataContainer,
  Row,
  DateCom,
  CityCom,
  ImageWrapper,
} from "../components/styles/DisplayElements";

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
  const secToTime = (sec) => {
    let time = sec;
    let date = new Date(time * 1000);
    return `${date.getHours()}:${date.getMinutes()}`;
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Nocvember",
    "December",
  ];

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
  const date = `${days[currentDate.getDay()]}, ${currentDate.getDate()} ${
    months[currentDate.getMonth()]
  }`;
  const sunriseStr = secToTime(sunrise);
  const sunsetStr = secToTime(sunset);
  return (
    <Container>
      <TopBanner>
        <CityCom>
          {city}, {country}
        </CityCom>
        <DateCom>{date}</DateCom>
      </TopBanner>
      <BottomBanner>
        <Wrapper>
          <CardWrapper>
            <ImageWrapper>
              <Image src={icon} />
            </ImageWrapper>
            <Text>
              <TextHeader>{`${Math.trunc(temp - 273)}℃`}</TextHeader>
              <TextSubtitle>{type}</TextSubtitle>
            </Text>
          </CardWrapper>
        </Wrapper>
        <Wrapper>
          <Row>
            <Item>
              Minimum Temperature
              <DataContainer>{`${Math.trunc(minTemp - 273)}℃`}</DataContainer>
            </Item>
            <Item>
              Humidity
              <DataContainer> {`${humidity}%`}</DataContainer>
            </Item>
            <Item>
              Sunrise Time
              <DataContainer> {sunriseStr}</DataContainer>
            </Item>
          </Row>
          <Row>
            <Item>
              Maximum Temperature
              <DataContainer>{`${Math.trunc(maxTemp - 273)}℃`}</DataContainer>
            </Item>
            <Item>
              Wind Speed
              <DataContainer> {`${windSpeed}`}</DataContainer>
            </Item>
            <Item>
              Sunset Time
              <DataContainer> {sunsetStr}</DataContainer>
            </Item>
          </Row>
        </Wrapper>
      </BottomBanner>
    </Container>
  );
};

export default CurrentWeather;
