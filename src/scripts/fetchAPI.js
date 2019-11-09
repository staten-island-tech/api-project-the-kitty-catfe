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
      const forecastGridLink = weatherLinks.properties.forecastGridData;
      fetchAPI.getWeather(forecastGridLink);
    } catch {}
  },
  async getWeather(forecastGridLink) {
    try {
      let weatherData = await fetch(forecastGridLink);
      weatherData = await weatherData.json();
      weatherData = weatherData.properties;
    } catch {}
  }
};
export { fetchAPI };
