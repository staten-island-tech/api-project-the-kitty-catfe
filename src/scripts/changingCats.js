function init() {
  switch (object.weatherHourly[0].toLowerCase()) {
    case "clear":
      document.body.style.backgroundImage = "url('clear.jpg')";
      break;

    case "cloudy":
      document.body.style.backgroundImage = "url('cloudy.jpg')";
      break;

    case "partly cloudy":
      document.body.style.backgroundImage = "url('rain.jpg')";
      break;

    case "rain":
      document.body.style.backgroundImage = "url('storm.jpg')";
      break;

    case "snow":
      document.body.style.backgroundImage = "url('snow.jpg')";
      break;
    
   case "sunny":
      document.body.style.backgroundImage = "url('snow.jpg')";
      break;
  

    default:
      document.body.style.backgroundImage = "url('snow.jpg')";

      break;
  }
}