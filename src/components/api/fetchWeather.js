export const api = {
  key: "6092f9efa4c8707e83ec91a3004a0d13",
  base: "https://api.openweathermap.org/data/2.5/",
};

export const curWeather = (response) => {
  const {
    temp_max: maxTemp,
    temp_min: minTemp,
    humidity,
    pressure,
    temp,
  } = response.main;
  const { main: type } = response.weather[0];
  const { name: city } = response;
  const { speed: windSpeed } = response.wind;
  const { country, sunrise, sunset } = response.sys;

  const newWeatherObject = {
    temp,
    maxTemp,
    minTemp,
    humidity,
    pressure,
    type,
    city,
    windSpeed,
    country,
    sunrise,
    sunset,
  };
  return newWeatherObject;
};

export const forWeather = (response) => {
  const fiveDays = response.list.slice(1, 6);
  return fiveDays;
};
