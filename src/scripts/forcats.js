



class userInterface {
  display(userInput) {
    document.querySelector(".display").insertAdjacentHTML(
      "beforeend",
      `
      <div class="col s5">
      <div class="card element">
         <div class="card-image">
          <img src="${image}" onerror="this.onerror=null;this.src='images/png/the kitty forcats.png';">
         </div>
         <span class="card-title">${userInput.cityName}</span>
         <p class="card-subtitle">${userInput.calculateDate()};
         </p>
         <p class="card-subtitle">${userInput.calculateTime()}</p>
         <div class="card-content">
           <p class="weatherHourly">${userInput.weatherHourly}</p> 
           <p class="temperature">${userInput.temperature}&#8457;</p>
           <p class="tempatureMinMax"><span class="temperatureMaximum">&#8657; High: ${userInput.temperatureMaximum} &#8457; </span> | <span class="temperatureMaximum">&#8659; Low: ${userInput.temperatureMinimum} &#8457; </span> </p>
           <br>
           <p class="humidity"> Humidity: ${userInput.Humidity} </p>
           <p class="wind"> &#9780; Wind: Blowing <span class="windDirection">  ${userInput.windDirection} </span> at <span class="windSpeed"> ${userInput.windSpeed} mph</span> </p>
           <p class="sunrise-sunset">&#9788; Sunrise:<span class="sunrise" id="sunrise"> ${userInput.sunrise}am </span> | &#9737;  Sunset: <span class="sunset" id="sunset">${userInput.sunset}pm  </span> </p>
         <div class="remove">
           <button id="remove-city" class="waves-effect waves-light btn remove-city">Remove city</button>
         </div>
       </div>
         `
    );
  }
  removeData(target) {
    if (target.id === "remove-city") {
      target.parentElement.parentElement.parentElement.parentElement.remove();
    }
    if (document.querySelector(".card") === null) {
      document.querySelector(".main-row").insertAdjacentHTML(
        "afterend",
        `
          <div class="initial col s12 center-align">
            <img class="disc" src="images/svg/disc.svg" />
            <p class="initial-text">To start, fill in the fields to the left to display information about a music album.</p>
          </div>`
      );
    }
  }
  removeFields() {
    document.querySelector(".form").reset();
  }
}


class Card {
  constructor(cityName) {
    this.cityName = cityName;
    
  }
  calculateDate() {
    return new Date.getFullYear()+'-'+(new Date.getMonth()+1)+'-'+new Date.getDate();
  }
  calculateTime() {
    return new Date.getHours() + ":" + new Date.getMinutes();
  }
}
class eventListeners {
  submit() {
    document
      .querySelector("#submit")
      .addEventListener("click", function (event) {
        let userInput = new Card(
          document.querySelector("#city-name").value,
        );
        if (
          userInput.cityName === ""
        ) {
          M.toast({
            html: "Please enter a value for every field.",
            displayLength: 4000,
            classes: "rounded red"
          });
          event.preventDefault();
        } else {
          let userDisplay = new userInterface();
          userDisplay.display(userInput);
          event.preventDefault();
          userDisplay.removeFields();
          try {
            document.querySelector(".initial").remove();
          } catch (error) { }
        }
      });
  }
  remove() {
    document
      .querySelector(".display")
      .addEventListener("click", function (event) {
        let userRemove = new userInterface();
        userRemove.removeData(event.target);
      });
  }
}

function run() {
  let userEventListener = new eventListeners();
  userEventListener.submit();
  userEventListener.remove();
}
run();
