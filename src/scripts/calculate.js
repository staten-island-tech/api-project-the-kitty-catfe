const calculate = {
  currentDateAndHour() {
    let year = new Date().getUTCFullYear();
    let month = new Date().getUTCMonth() + 1;
    let day = new Date().getUTCDate();
    let hour = new Date().getUTCHours();
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
    if (hour < 10) {
      hour = '0' + hour;
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
    let year = parseInt(timeCode.split('-')[0]);
    let month = parseInt(timeCode.split('-')[1]);
    let day = parseInt(timeCode.split('-')[2].split('T')[0]);
    let hour = parseInt(timeCode.split('T')[1].split(':')[0]);
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
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
    if (hour < 10) {
      hour = '0' + hour;
    }
    return `${year}-${month}-${day}T${hour}:00:00+00:00`;
  }
};
export { calculate };
