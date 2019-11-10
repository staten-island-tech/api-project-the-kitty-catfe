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
      let weatherLinks = await fetch(
        `https://api.weather.gov/points/${latitude},${longitude}`
      );
      weatherLinks = await weatherLinks.json();
      const forecastLink = weatherLinks.properties.forecast;
      const forecastHourlyLink = weatherLinks.properties.forecastHourly;
      const forecastGridLink = weatherLinks.properties.forecastGridData;
      fetchAPI.getWeather(forecastLink, forecastHourlyLink, forecastGridLink);
    } catch {}
  },
  async getWeather(forecastLink, forecastHourlyLink, forecastGridLink) {
    try {
      let forecastData = await fetch(forecastLink);
      forecastData = await forecastData.json();
      forecastData = forecastData.properties;
      let forecastHourlyData = await fetch(forecastHourlyLink);
      forecastHourlyData = await forecastHourlyData.json();
      forecastHourlyData = forecastHourlyData.properties;
      let forecastGridData = await fetch(forecastGridLink);
      forecastGridData = await forecastGridData.json();
      forecastGridData = forecastGridData.properties;
    } catch {}
  }
};
export { fetchAPI };
