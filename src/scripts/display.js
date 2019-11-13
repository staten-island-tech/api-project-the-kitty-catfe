import { DOMStrings } from "./domStrings.js";
let currentDay = new Date().getDay();
if (currentDay === 0) {
  currentDay = "Sunday";
} else if (currentDay === 1) {
  currentDay = "Monday";
} else if (currentDay === 2) {
  currentDay = "Tuesday";
} else if (currentDay === 3) {
  currentDay = "Wednesday";
} else if (currentDay === 4) {
  currentDay = "Thursday";
} else if (currentDay === 5) {
  currentDay = "Friday";
} else {
  currentDay = "Saturday";
}
function addHours(numberOfHours) {
  let hours = new Date().getHours() + numberOfHours;
  if (hours > 0 && hours < 12) {
    hours = hours + " AM";
  } else if (hours === 12) {
    hours = 12 + " PM";
  } else if (hours > 12) {
    hours = hours - 12;
    hours = hours + " PM";
  }
  return hours;
}
function displayInsertion(object) {
  const html = `<div class="container margin">
  <div class="row">
    <div class=" s6">
      <div class="">
        <img class="main-condition" src="./media/svg/${object.weatherHourly[0].toLowerCase()}.svg" />
        <h5 class="text-center">${object.weatherHourly[0]}</h5>
        <h1 class="text-center">${object.temperature[0]}&#176;</h1>
        <h4 class="text-center">${object.cityName}</h4>
        <p>
          ${currentDay}
          <span class="text-right min">${object.temperatureMinimum[0]}</span>
          <span class="text-right max">${object.temperatureMaximum[0]}</span>
        </p>
      </div>
      <div class="">
        <div class="row">
          <div class="col s2">
            <p class="text-center">Now</p>
            <img class="icon" src="./media/svg/${object.weatherHourly[0].toLowerCase()}.svg" />
            <p class="text-center">${object.temperature[0]}&#176;</p>
          </div>
          <div class="col s2">
            <p class="text-center">${addHours(1)}</p>
            <img class="icon" src="./media/svg/${object.weatherHourly[1].toLowerCase()}.svg" />
            <p class="text-center">${object.temperature[1]}&#176;</p>
          </div>
          <div class="col s2">
            <p class="text-center">${addHours(2)}</p>
            <img class="icon" src="./media/svg/${object.weatherHourly[2].toLowerCase()}.svg" />
            <p class="text-center">${object.temperature[2]}&#176;</p>
          </div>
          <div class="col s2">
            <p class="text-center">${addHours(3)}</p>
            <img class="icon" src="./media/svg/${object.weatherHourly[3].toLowerCase()}.svg" />
            <p class="text-center">${object.temperature[3]}&#176;</p>
          </div>
          <div class="col s2">
            <p class="text-center">${addHours(4)}</p>
            <img class="icon" src="./media/svg/${object.weatherHourly[4].toLowerCase()}.svg" />
            <p class="text-center">${object.temperature[4]}&#176;</p>
          </div>
          <div class="col s2">
            <p class="text-center">${addHours(5)}</p>
            <img class="icon" src="./media/svg/${object.weatherHourly[5].toLowerCase()}.svg" />
            <p class="text-center">${object.temperature[5]}&#176;</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
  DOMStrings.insertionPoint.insertAdjacentHTML("beforeend", html);
}
export { displayInsertion };
