
//////////////////
//my stuff

document.getElementById("userInput").addEventListener("click", init);


function init() {
  switch (object.weatherHourly[0].toLowerCase()) {
    case "Clear":
      document.body.style.backgroundImage = "url('./media/svg/clearcat.jpg')";
      break;

    case "Cloudy":
      document.body.style.backgroundImage = "url('./media/svg/cloudycat.jpg')";
      break;

    case "Partly cloudy":
      document.body.style.backgroundImage = "url('./media/svg/partly cloudycat.jpg')";
      break;

    case "Rain":
      document.body.style.backgroundImage = "url('./media/svg/raincat.jpg')";
      break;

    case "Snow":
      document.body.style.backgroundImage = "url('./media/svg/snowcat.jpg')";
      break;
    
   case "Sunny":
      document.body.style.backgroundImage = "url('./media/svg/sunnycat.jpg')";
      break;
  

    default:
      document.body.style.backgroundImage = "url('./media/svg/sunnycat.jpg')";
      break;
  }
}

//////////////////
//my stuff

document.getElementById("userInput").addEventListener("click", init);


function init() {
  switch (object.weatherHourly[0].toLowerCase()) {
    case "Clear":
      document.body.style.backgroundImage = "url('./media/svg/clearcat.jpg')";
      break;

    case "Cloudy":
      document.body.style.backgroundImage = "url('./media/svg/cloudycat.jpg')";
      break;

    case "Partly cloudy":
      document.body.style.backgroundImage = "url('./media/svg/partly cloudycat.jpg')";
      break;

    case "Rain":
      document.body.style.backgroundImage = "url('./media/svg/raincat.jpg')";
      break;

    case "Snow":
      document.body.style.backgroundImage = "url('./media/svg/snowcat.jpg')";
      break;
    
   case "Sunny":
      document.body.style.backgroundImage = "url('./media/svg/sunnycat.jpg')";
      break;
  

    default:
      document.body.style.backgroundImage = "url('./media/svg/sunnycat.jpg')";
      break;
  }
}

export { changingCats }