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
    currentTimeData.getTimezoneOffset / 60
  ];
  let start;
  let temperatureFinal = [];
  for (i = 0; i <= timeAndDate[4] + 10; i++) {
    if (
      temperatureInitial[i].validTime ===
        `${timeAndDate[0]}-${timeAndDate[1]}-${timeAndDate[2]}T${
          timeAndDate[3]
        }:00:00+0:00/PT1H` ||
      temperatureInitial[i].validTime ===
        `${timeAndDate[0]}-${timeAndDate[1]}-${
          timeAndDate[2]
        }T${timeAndDate[3] - 1}:00:00+0:00/PT2H` ||
      temperatureInitial[i].validTime ===
        `${timeAndDate[0]}-${timeAndDate[1]}-${
          timeAndDate[2]
        }T${timeAndDate[3] - 2}:00:00+0:00/PT3H`
    ) {
      start = true;
    }
    if (start === true) {
      let iteration = temperatureInitial[i].validTime.split('/PT');
      iteration = iteration[1].split('H');
      iteration = parseInt(iteration[0]);
      for (x = 1; x <= iteration; x++) {
        temperatureFinal = temperatureFinal.push(temperatureInitial[i].value);
      }
    }
    if (i === timeAndDate[4] + 10) {
      start = false;
    }
  }
  console.log(temperatureFinal);
}
export { dataConstruction };
