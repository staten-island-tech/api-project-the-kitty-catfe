const calculate = {
  currentDateAndHour() {
    let year = new Date().getUTCFullYear();
    let month = new Date().getUTCMonth() + 1;
    let day = new Date().getUTCDate();
    let hour = new Date().getUTCHours();
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    return `${year}-${month}-${day}T${hour}:00:00+00:00`;
  },
  addDays(numberOfDays) {
    let currentDate = [
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      new Date().getDate()
    ];
    let daysInMonth = new Date(currentDate[0], currentDate[1], 0).getDate();
    currentDate[2] = currentDate[2] + numberOfDays;
    if (currentDate[2] > daysInMonth) {
      currentDate[1] = currentDate[1] + 1;
      currentDate[2] = currentDate[2] - daysInMonth;
    }
    if (currentDate[1] === 13) {
      currentDate[0] = currentDate[0] + 1;
      currentDate[1] = 1;
    }
    let adjustedDate = currentDate;
    return adjustedDate;
  },
  addHours(timeCode, numberOfHours) {
    let year = parseInt(timeCode.split("-")[0]);
    let month = parseInt(timeCode.split("-")[1]);
    let day = parseInt(timeCode.split("-")[2].split("T")[0]);
    let hour = parseInt(timeCode.split("T")[1].split(":")[0]);
    let daysInMonth = new Date(year, month, 0).getDate();
    hour = hour + numberOfHours;
    if (hour > 23) {
      day = day + 1;
      hour = hour - 24;
    }
    if (day > daysInMonth) {
      month = month + 1;
      day = day - daysInMonth;
    }
    if (month > 12) {
      year = year + 1;
      month = month - 12;
    }
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    return `${year}-${month}-${day}T${hour}:00:00+00:00`;
  },
  angleToDirection(angle) {
    if (angle === 0) {
      return "North";
    } else if (angle > 0 && angle < 90) {
      return "Northeast";
    } else if (angle === 90) {
      return "East";
    } else if (angle > 90 && angle < 180) {
      return "Southeast";
    } else if (angle === 180) {
      return "South";
    } else if (angle > 180 && angle < 270) {
      return "Southwest";
    } else if (angle === 270) {
      return "West";
    } else if (angle > 270 && angle < 360) {
      return "Northwest";
    }
  },
  toMilesPerHour(metersPerSecond) {
    return Math.round(metersPerSecond * 2.2369);
  },
  toFahrenheit(celsius) {
    return Math.round(celsius * 1.8 + 32);
  },
  toTimeZone(timeCode) {
    const timeZone = new Date().getTimezoneOffset() / 60;
    let hour = parseInt(timeCode.split("T")[1].split(":")[0]);
    let minute = timeCode.split("T")[1].split(":")[1];
    hour = hour - timeZone;
    let temp;
    if (hour < 0) {
      hour = 24 + hour;
      temp = `${hour}:${minute} PM`;
    }
    if (hour === 0) {
      temp = `12:${minute} AM`;
    }
    if (hour > 0 && hour < 12) {
      temp = `${hour}:${minute} AM`;
    }
    if (hour === 12) {
      temp = `12:${minute} PM`;
    }
    if (hour >= 13) {
      hour = hour - 12;
      temp = `${hour}:${minute} PM`;
    }
    return temp;
  }
};
export { calculate };
