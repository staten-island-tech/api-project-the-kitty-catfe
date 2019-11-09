import { DOMStrings } from './domStrings.js';
const fetchAPI = {
  getLocation() {
    DOMStrings.userInputClick.addEventListener('click', async function(event) {
      event.preventDefault();
      const city = DOMStrings.userInputData.toString().replace(' ', '+');
      console.log(city);
    });
  }
};
