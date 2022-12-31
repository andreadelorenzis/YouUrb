export function validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

export function validateCellphone(cellphone) {
    const regex = /^\d{10}$/;
    return regex.test(cellphone);
}

export function formatPrice(price) {
    return price.toFixed(2) + '€';
}

export function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // add a 0 to the day if it's a single digit
    if (day < 10) {
        day = '0' + day;
    }
    // add a 0 to the month if it's a single digit
    if (month < 10) {
        month = '0' + month;
    }

    return day + '/' + month + '/' + year;
}

export function formatHour(date) {
    let hour = date.getHours();
    let minutes = date.getMinutes();

    // add a 0 to the hour if it's a single digit
    if (hour < 10) {
        hour = '0' + hour;
    }
    // add a 0 to the minutes if it's a single digit
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    return hour + ':' + minutes;
}