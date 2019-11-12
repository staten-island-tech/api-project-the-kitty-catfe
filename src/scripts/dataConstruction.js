import { calculate } from './calculate.js';
class Forecast {
  constructor(
    temperature,
    temperatureMaximum,
    temperatureMinimum,
    weatherHourly,
    weatherDaily,
    probabilityOfPrecipitation,
    humidity,
    windDirection,
    windSpeed,
    sunrise,
    sunset
  ) {
    this.temperature = temperature;
    this.temperatureMaximum = temperatureMaximum;
    this.temperatureMinimum = temperatureMinimum;
    this.weatherHourly = weatherHourly;
    this.weatherDaily = weatherDaily;
    this.probabilityOfPrecipitation = probabilityOfPrecipitation;
    this.humidity = humidity;
    this.windDirection = windDirection;
    this.windSpeed = windSpeed;
    this.sunrise = sunrise;
    this.sunset = sunset;
  }
}
function interpret(array) {
  let counter;
  let values;
  let returnArray = [];
  for (let y = 0; y <= 12; y++) {
    counter = parseInt(array[y].validTime.split('/PT')[1].split('H')[0]);
    for (let z = 0; z <= counter - 1; z++) {
      values = {
        validTime: calculate.addHours(array[y].validTime, z),
        value: array[y].value
      };
      returnArray.push(values);
    }
  }
  return returnArray;
}
function search(array, searchValue) {
  let store;
  for (let x = 0; x <= array.length - 2; x++) {
    if (array[x].validTime === searchValue) {
      store = array[x].value;
    }
  }
  return store;
}
function dataConstruction(
  forecastData,
  forecastHourlyData,
  forecastGridData,
  sunrise,
  sunset
) {
  const temperature = forecastHourlyData.periods.map(
    value => value.temperature
  );
  const weatherHourly = forecastHourlyData.periods.map(
    value => value.shortForecast
  );
  const precipitation = search(
    interpret(forecastGridData.probabilityOfPrecipitation.values),
    calculate.currentDateAndHour()
  );
  const humidity = search(
    interpret(forecastGridData.relativeHumidity.values),
    calculate.currentDateAndHour()
  );
  const windDirection = search(
    interpret(forecastGridData.windDirection.values),
    calculate.currentDateAndHour()
  );
  console.log(windDirection);
  let temperatureMaximum = [];
  let temperatureMinimum = [];
  let weatherDaily = [];
  let start;
  for (let a = 0; a <= 6; a++) {
    if (
      forecastGridData.maxTemperature.values[a].validTime.split('T')[0] ===
      `${new Date().getFullYear()}-${new Date().getMonth() +
        1}-${new Date().getDate()}`
    ) {
      start = true;
    }
    if (start === true) {
      temperatureMaximum.push(forecastGridData.maxTemperature.values[a].value);
    }
    if (a === 6) {
      start = false;
    }
  }
  for (let b = 0; b <= 6; b++) {
    if (
      forecastGridData.minTemperature.values[b].validTime.split('T')[0] ===
      `${new Date().getFullYear()}-${new Date().getMonth() +
        1}-${new Date().getDate()}`
    ) {
      start = true;
    }
    if (start === true) {
      temperatureMinimum.push(forecastGridData.minTemperature.values[b].value);
    }
    if (b === 6) {
      start = false;
    }
  }
  const tomorrow = calculate.addDays(1);
  for (let c = 0; c <= 10; c++) {
    if (
      forecastData.periods[c].startTime.split(':')[0] ===
      `${tomorrow[0]}-${tomorrow[1]}-${tomorrow[2]}T06`
    ) {
      start = true;
    }
    if (
      start === true &&
      forecastData.periods[c].startTime.split(':')[0].split('T')[1] === '06'
    ) {
      weatherDaily.push(forecastData.periods[c].shortForecast);
    }
    if (c === 10) {
      start = false;
    }
  }
}
export { dataConstruction };
