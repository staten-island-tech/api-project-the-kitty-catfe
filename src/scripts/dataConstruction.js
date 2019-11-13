import { calculate } from "./calculate.js";
import { displayInsertion } from "./display.js";
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
    sunset,
    cityName
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
    this.cityName = cityName;
  }
}
function interpret(array) {
  let counter;
  let values;
  let returnArray = [];
  for (let y = 0; returnArray.length < 25; y++) {
    if (array[y].validTime.split("/")[1].length >= 6) {
      counter =
        24 * parseInt(array[y].validTime.split("")) +
        parseInt(array[y].validTime.split("T")[2].split("H")[0]);
    } else {
      counter = parseInt(array[y].validTime.split("/PT")[1].split("H")[0]);
    }
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
function simplifyCondition(array) {
  let value;
  let returnValue;
  let returnArray = [];
  for (let w = 0; w <= array.length - 1; w++) {
    value = array[w].split(" ");
    for (let v = 0; v <= value.length - 1; v++) {
      if (value[v] === "Partly") {
        returnValue = "Partly Cloudy";
        v = value.length;
      }
      if (value[v] === "Slight") {
        returnValue = "Cloudy";
        v = value.length;
      }
      if (value[v] === "Clear") {
        returnValue = value[v];
      }
      if (value[v] === "Sunny") {
        returnValue = value[v];
      }
      if (value[v] === "Cloudy") {
        returnValue = value[v];
      }
      if (value[v] === "Rain") {
        returnValue = value[v];
      }
      if (value[v] === "Snow") {
        returnValue = value[v];
      }
    }
    returnArray.push(returnValue);
  }
  return returnArray;
}
function dataConstruction(
  forecastData,
  forecastHourlyData,
  forecastGridData,
  sunrise,
  sunset,
  cityName
) {
  const sunriseTime = calculate.toTimeZone(sunrise);
  const sunsetTime = calculate.toTimeZone(sunset);
  let temperature = forecastHourlyData.periods.map(value => value.temperature);
  temperature.length = 6;
  let weatherHourly = forecastHourlyData.periods.map(
    value => value.shortForecast
  );
  weatherHourly.length = 6;

  const precipitation = search(
    interpret(forecastGridData.probabilityOfPrecipitation.values),
    calculate.currentDateAndHour()
  );
  const humidity = search(
    interpret(forecastGridData.relativeHumidity.values),
    calculate.currentDateAndHour()
  );
  const windDirection = calculate.angleToDirection(
    search(
      interpret(forecastGridData.windDirection.values),
      calculate.currentDateAndHour()
    )
  );
  const windSpeed = calculate.toMilesPerHour(
    search(
      interpret(forecastGridData.windSpeed.values),
      calculate.currentDateAndHour()
    )
  );
  let temperatureMaximum = [];
  let temperatureMinimum = [];
  let weatherDaily = [];
  let start;
  const tomorrow = calculate.addDays(1);
  for (let a = 0; a <= 6; a++) {
    if (
      forecastGridData.maxTemperature.values[a].validTime.split("T")[0] ===
        `${new Date().getFullYear()}-${new Date().getMonth() +
          1}-${new Date().getDate()}` ||
      forecastGridData.maxTemperature.values[a].validTime.split("T")[0] ===
        `${tomorrow[0]}-${tomorrow[1]}-${tomorrow[2]}`
    ) {
      start = true;
    }
    if (start === true) {
      temperatureMaximum.push(
        calculate.toFahrenheit(forecastGridData.maxTemperature.values[a].value)
      );
    }
    if (a === 6) {
      start = false;
    }
  }
  for (let b = 0; b <= 6; b++) {
    if (
      forecastGridData.minTemperature.values[b].validTime.split("T")[0] ===
        `${new Date().getFullYear()}-${new Date().getMonth() +
          1}-${new Date().getDate()}` ||
      forecastGridData.minTemperature.values[b].validTime.split("T")[0] ===
        `${tomorrow[0]}-${tomorrow[1]}-${tomorrow[2]}`
    ) {
      start = true;
    }
    if (start === true) {
      temperatureMinimum.push(
        calculate.toFahrenheit(forecastGridData.minTemperature.values[b].value)
      );
    }
    if (b === 6) {
      start = false;
    }
  }
  for (let c = 0; c <= forecastData.periods.length - 1; c++) {
    if (
      forecastData.periods[c].startTime.split(":")[0] ===
      `${tomorrow[0]}-${tomorrow[1]}-${tomorrow[2]}T06`
    ) {
      start = true;
    }
    if (
      start === true &&
      forecastData.periods[c].startTime.split(":")[0].split("T")[1] === "06"
    ) {
      weatherDaily.push(forecastData.periods[c].shortForecast);
    }
    if (c === forecastData.periods.length - 1) {
      start = false;
    }
  }
  weatherHourly = simplifyCondition(weatherHourly);
  weatherDaily = simplifyCondition(weatherDaily);
  const forecast = new Forecast(
    temperature,
    temperatureMaximum,
    temperatureMinimum,
    weatherHourly,
    weatherDaily,
    precipitation,
    humidity,
    windDirection,
    windSpeed,
    sunriseTime,
    sunsetTime,
    cityName
  );
  displayInsertion(forecast);
}
export { dataConstruction };
