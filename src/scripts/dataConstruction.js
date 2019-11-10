class Forecast {
  constructor(
    temperature,
    temperatureMaximum,
    temperatureMinimum,
    weatherHourly,
    weatherDaily,
    probabilityOfPercipitation,
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
    this.probabilityOfPercipitation = probabilityOfPercipitation;
    this.humidity = humidity;
    this.windDirection = windDirection;
    this.windSpeed = windSpeed;
    this.sunrise = sunrise;
    this.sunset = sunset;
  }
}
function dataConstruction(
  forecastData,
  forecastHourlyData,
  forecastGridData,
  sunrise,
  sunset
) {
  const currentTimeData = new Date();
  const temperatureInitial = forecastGridData.temperature.values;
  const timeAndDate = [
    currentTimeData.getUTCFullYear(),
    currentTimeData.getUTCMonth() + 1,
    currentTimeData.getUTCDate(),
    currentTimeData.getUTCHours(),
    currentTimeData.getTimezoneOffset() / 60
  ];
  let start, a, b;
  let temperatureFinal = [];
  for (a = 0; a <= timeAndDate[4] + 24; a++) {
    if (
      temperatureInitial[a].validTime ===
        `${timeAndDate[0]}-${timeAndDate[1]}-${timeAndDate[2]}T${
          timeAndDate[3]
        }:00:00+00:00/PT1H` ||
      temperatureInitial[a].validTime ===
        `${timeAndDate[0]}-${timeAndDate[1]}-${
          timeAndDate[2]
        }T${timeAndDate[3] - 1}:00:00+00:00/PT2H` ||
      temperatureInitial[a].validTime ===
        `${timeAndDate[0]}-${timeAndDate[1]}-${
          timeAndDate[2]
        }T${timeAndDate[3] - 2}:00:00+00:00/PT3H`
    ) {
      start = true;
    }
    if (start === true) {
      let iteration = temperatureInitial[a].validTime.split('/PT');
      iteration = iteration[1].split('H');
      iteration = parseInt(iteration[0]);
      for (b = 1; b <= iteration; b++) {
        temperatureFinal.push(temperatureInitial[a].value);
      }
    }
    if (a === timeAndDate[4] + 24) {
      start = false;
    }
  }
}
export { dataConstruction };
