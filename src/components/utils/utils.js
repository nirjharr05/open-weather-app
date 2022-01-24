export const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const months = [
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

export const secToTime = (sec) => {
  let time = sec;
  let date = new Date(time * 1000);
  return `${date.getHours()}:${date.getMinutes()}`;
};
