import { DOMStrings } from './domStrings.js';
const fetchAPI = {
  getLocation() {
    DOMStrings.userInputClick.addEventListener('click', async function(event) {
      event.preventDefault();
      const city = DOMStrings.userInputData.value.replace(' ', '+');
      try {
        let locationData = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyDi9Tn0USjAMQngfVAOQgsyBD9ZiCTuI9w`
        );
        locationData = await locationData.json();
        const latitude = locationData.results[0].geometry.location.lat;
        const longitude = locationData.results[0].geometry.location.lng;
        fetchAPI.getWeatherLink(latitude, longitude);
      } catch {}
    });
  },
  async getWeatherLink(latitude, longitude) {
    try {
      let weatherLinkData = await fetch(
        `https://api.weather.gov/points/${latitude},${longitude}`
      );
      weatherLinkData = await weatherLinkData.json();
      const weatherForecastLink = weatherLinkData.properties.forecast;
      const weatherHourlyForecastLink =
        weatherLinkData.properties.forecastHourly;
      fetchAPI.getWeather(weatherForecastLink, weatherHourlyForecastLink);
    } catch {}
  },
  async getWeather(weatherForecastData, weatherHourlyForecastData) {
    try {
      let forecast = await fetch(weatherForecastData);
      forecast = await forecast.json();
      let forecastHourly = await fetch(weatherHourlyForecastData);
      forecastHourly = forecastHourly.json();
    } catch {}
  }
};
export { fetchAPI };
