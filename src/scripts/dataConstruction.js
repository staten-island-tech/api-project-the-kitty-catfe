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
    windSpeed
  ) {
    (this.temperature = temperature),
      (this.temperatureMaximum = temperatureMaximum),
      (this.temperatureMinimum = temperatureMinimum),
      (this.weatherHourly = weatherHourly),
      (this.weatherDaily = weatherDaily),
      (this.probabilityOfPercipitation = probabilityOfPercipitation),
      (this.humidity = humidity),
      (this.windDirection = windDirection),
      (this.windSpeed = windSpeed);
  }
}
