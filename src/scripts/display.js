import { DOMStrings } from "./domStrings.js";
import { timeAndDate } from "./timeAndDate.js";

function addHours(numberOfHours) {
  let hours = new Date().getHours() + numberOfHours;
  if (hours === 0) {
    hours = `12 AM`;
  } else if (hours > 0 && hours < 12) {
    hours = hours + " AM";
  } else if (hours === 12) {
    hours = " 12 PM";
  } else if (hours > 12 && hours <= 23) {
    hours = hours - 12;
    hours = hours + " PM";
  } else if (hours === 24) {
    hours = `12 AM`;
  } else if (hours > 24) {
    hours = hours - 24;
    hours = hours + " AM";
  }
  return hours;
}

function displayInsertion(object) {
  const html = `<div class="container margin ">
  <div class="row">
    <div class=" s6">
      <div class="">
          <img class="main-condition" src="./images/jpg/${object.weatherHourly[0]
            .toLowerCase()
            .replace(" ", "")}cat.jpg" />
        <h5 class="text-center">${object.weatherHourly[0]}</h5>
        <h1 class="text-center">${object.temperature[0]}&#176;</h1>
        <p class="text-center">
        <span class=" max">&#8657; ${
          object.temperatureMaximum[0]
        }&#8457; </span> <span class="min"> &#8659; ${
    object.temperatureMinimum[0]
  } &#8457;</span>
  
      </p>
      <p class="text-center">
      <span> Sunrise: ${object.sunrise} </span> <span>Sunset: ${
    object.sunset
  }</span>

    </p>
        <h4 class="text-center">${object.cityName}</h4>
        <h5 class="text-center">${timeAndDate.givenDate(
          timeAndDate.givenDate
        )} | ${timeAndDate.currentTime(timeAndDate.hours)} </h5>
       <br>
      </div>
      <div class="">
        <div class="row">
          <div class="col s2">
            <p class="text-center">Now</p>
            <img class="icon" src="./media/svg/${object.weatherHourly[0]
              .toLowerCase()
              .replace(" ", "")}.svg" />
            <p class="text-center">${object.temperature[0]}&#176;</p>
          </div>
          <div class="col s2">
            <p class="text-center">${addHours(1)}</p>
            <img class="icon" src="./media/svg/${object.weatherHourly[1]
              .toLowerCase()
              .replace(" ", "")}.svg" />
            <p class="text-center">${object.temperature[1]}&#176;</p>
          </div>
          <div class="col s2">
            <p class="text-center">${addHours(2)}</p>
            <img class="icon" src="./media/svg/${object.weatherHourly[2]
              .toLowerCase()
              .replace(" ", "")}.svg" />
            <p class="text-center">${object.temperature[2]}&#176;</p>
          </div>
          <div class="col s2">
            <p class="text-center">${addHours(3)}</p>
            <img class="icon" src="./media/svg/${object.weatherHourly[3]
              .toLowerCase()
              .replace(" ", "")}.svg" />
            <p class="text-center">${object.temperature[3]}&#176;</p>
          </div>
          <div class="col s2">
            <p class="text-center">${addHours(4)}</p>
            <img class="icon" src="./media/svg/${object.weatherHourly[4]
              .toLowerCase()
              .replace(" ", "")}.svg" />
            <p class="text-center">${object.temperature[4]}&#176;</p>
          </div>
          <div class="col s2">
            <p class="text-center">${addHours(5)}</p>
            <img class="icon" src="./media/svg/${object.weatherHourly[5]
              .toLowerCase()
              .replace(" ", "")}.svg" />
            <p class="text-center">${object.temperature[5]}&#176;</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
  DOMStrings.insertionPoint.insertAdjacentHTML("beforeend", html);
  document.querySelector(".form").reset();
}

export { displayInsertion };
