import { DOMStrings } from "./domStrings.js";
import { dataConstruction } from "./dataConstruction.js";
const fetchAPI = {
  getLocation() {
    DOMStrings.userInputClick.addEventListener("click", async function(event) {
      event.preventDefault();
      const zipcode = DOMStrings.userInputData.value.replace(" ", "+");
      try {
        const locationData = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=AIzaSyDi9Tn0USjAMQngfVAOQgsyBD9ZiCTuI9w`
        ).then(result => result.json());
        const latitude = locationData.results[0].geometry.location.lat;
        const longitude = locationData.results[0].geometry.location.lng;
        const cityName =
          locationData.results[0].address_components[1].long_name;
        fetchAPI.getWeatherLink(latitude, longitude, cityName);
      } catch {}
    });
  },
  async getWeatherLink(latitude, longitude, cityName) {
    try {
      const weatherLinks = await fetch(
        `https://api.weather.gov/points/${latitude},${longitude}`
      ).then(result => result.json());
      const forecastLink = weatherLinks.properties.forecast;
      const forecastHourlyLink = weatherLinks.properties.forecastHourly;
      const forecastGridLink = weatherLinks.properties.forecastGridData;
      fetchAPI.getWeather(
        latitude,
        longitude,
        forecastLink,
        forecastHourlyLink,
        forecastGridLink,
        cityName
      );
    } catch {}
  },
  async getWeather(
    latitude,
    longitude,
    forecastLink,
    forecastHourlyLink,
    forecastGridLink,
    cityName
  ) {
    const currentTimeData = new Date();
    try {
      let forecastData = fetch(forecastLink);
      let forecastHourlyData = fetch(forecastHourlyLink);
      let forecastGridData = fetch(forecastGridLink);
      let sunriseSunset = fetch(
        `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${currentTimeData.getFullYear()}-${currentTimeData.getMonth() +
          1}-${currentTimeData.getDate()}&formatted=0`
      );
      const returnArray = await Promise.all([
        forecastData,
        forecastHourlyData,
        forecastGridData,
        sunriseSunset
      ]);
      const returnData = returnArray.map(result => result.json());
      [
        forecastData,
        forecastHourlyData,
        forecastGridData,
        sunriseSunset
      ] = await Promise.all(returnData);
      forecastData = forecastData.properties;
      forecastHourlyData = forecastHourlyData.properties;
      forecastGridData = forecastGridData.properties;
      const sunrise = sunriseSunset.results.sunrise;
      const sunset = sunriseSunset.results.sunset;
      dataConstruction(
        forecastData,
        forecastHourlyData,
        forecastGridData,
        sunrise,
        sunset,
        cityName
      );
    } catch {}
  }
};
export { fetchAPI };
