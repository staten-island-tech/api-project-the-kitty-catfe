const timeAndDate = {

    currentTime() {
        let hours = new Date().getHours();
        if (hours > 0 && hours < 12) {
            hours = hours + " AM";
        } else if (hours === 12) {
            hours = 12 + " PM";
        } else if (hours > 12) {
            hours = hours - 12;
            hours = hours + " PM";
        }
        return hours;
    },

    givenDate() {
        let givenDay = new Date().getDay();
        if (givenDay === 0) {
            givenDay = "Sunday";
        } else if (givenDay === 1) {
            givenDay = "Monday";
        } else if (givenDay === 2) {
            giventDay = "Tuesday";
        } else if (givenDay === 3) {
            givenDay = "Wednesday";
        } else if (givenDay === 4) {
            givenDay = "Thursday";
        } else if (givenDay === 5) {
            givenDay = "Friday";
        } else {
            givenDay = "Saturday";

        }
        return givenDay;
    }

}

export { timeAndDate };

