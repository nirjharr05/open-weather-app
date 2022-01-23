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

  const newCurrentObject = {
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
  return newCurrentObject;
};

export const forWeather = (response) => {
  const days = response.list;
  const final = [];
  for (let i = 0; i < 5; i++) {
    const { temp_max: maxTemp, temp_min: minTemp } = days[i].main;
    final.push({ maxTemp, minTemp });
  }
  return final;
};
