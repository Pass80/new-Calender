const YearMonthes = [
    'January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const daysOfWeek = ['Sun', 'Mon', 'Teu', 'Wed', 'Thu', 'Fri', 'Sat'];
const daysInHeader = document.getElementById('week-days');
const daysContainer = document.getElementById('days');
const daysofCurrentMonth = document.getElementsByClassName('day');
// store the current month in variable
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
console.log(currentMonth);

const currentDay = new Date().getDate();
// const currentDay = 2;

// store the day number of the current month in variable
// const firstDay = new Date().getDate();

// console.log(new Date().getDate());
// console.log(currentMonth);

let currentMonthDays = [];

function next() {
    while (daysContainer.firstChild) {
        daysContainer.removeChild(daysContainer.firstChild);
    }
    console.log(daysContainer.children);

    currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    addMonthDays(currentMonth, currentYear);
}

function previous() {
    while (daysContainer.firstChild) {
        daysContainer.removeChild(daysContainer.firstChild);
    }
    console.log(daysContainer.children);
    currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    addMonthDays(currentMonth, currentYear);
}

const addMonthDays = (month, year) => {
    //get the first day of the month
    const firstDay = new Date(year, month).getDate();
    console.log(firstDay);

    // show the year and the month in the header area
    document.getElementById('showHeader').innerHTML =
        YearMonthes[month] + ' ' + year;

    let i;

    if (
        currentMonth === 3 ||
        currentMonth === 5 ||
        currentMonth === 8 ||
        currentMonth === 10
    ) {
        for (i = 0; i < 30; i++) {
            const singleDay = document.createElement('div');
            const textnode = document.createTextNode(i + 1);
            singleDay.appendChild(textnode);
            singleDay.setAttribute('class', 'day');
            singleDay.setAttribute('key', i);
            daysContainer.appendChild(singleDay);
            // console.log(singleDay);
        }
    } else if (
        currentMonth === 0 ||
        currentMonth === 2 ||
        currentMonth === 4 ||
        currentMonth === 6 ||
        currentMonth === 7 ||
        currentMonth === 9 ||
        currentMonth === 11
    ) {
        for (i = 0; i < 35; i++) {
            const singleDay = document.createElement('div');
            singleDay.setAttribute('class', 'day');
            singleDay.setAttribute('key', i);
            daysContainer.appendChild(singleDay);

            // console.log(singleDay);
        }
        if (firstDay === 1) {
            for (i = 1; i < 32; i++) {
                daysContainer.children[i].innerHTML = i;
                const styledDay =
                    daysContainer.children[currentDay].classList.add(
                        'currentDay'
                    );
            }
            console.log(currentDay);
        }

        if (firstDay === 2) {
            for (i = 2; i < 33; i++) {
                daysContainer.children[i].innerHTML = i - 1;
                const styledDay =
                    daysContainer.children[currentDay + 1].classList.add(
                        'currentDay'
                    );
            }
        }
        if (firstDay === 3) {
            for (i = 3; i < 34; i++) {
                daysContainer.children[i].innerHTML = i - 2;
                const styledDay =
                    daysContainer.children[currentDay + 2].classList.add(
                        'currentDay'
                    );
            }
        }
        if (firstDay === 4) {
            for (i = 4; i < 35; i++) {
                daysContainer.children[i].innerHTML = i - 3;
                const styledDay =
                    daysContainer.children[currentDay + 3].classList.add(
                        'currentDay'
                    );
            }
        }
        if (firstDay === 5) {
            for (i = 5; i < 36; i++) {
                daysContainer.children[i].innerHTML = i - 4;
                const styledDay =
                    daysContainer.children[currentDay + 4].classList.add(
                        'currentDay'
                    );
            }
        }
        if (firstDay === 6) {
            for (i = 6; i < 37; i++) {
                daysContainer.children[i].innerHTML = i - 5;
                const styledDay =
                    daysContainer.children[currentDay + 5].classList.add(
                        'currentDay'
                    );
            }
        }
        if (firstDay === 0) {
            for (i = 0; i < 31; i++) {
                daysContainer.children[i].innerHTML = i;
                const styledDay =
                    daysContainer.children[currentDay - 1].classList.add(
                        'currentDay'
                    );
            }
        }

        // singleDay.setAttribute('class', 'day');
        // singleDay.setAttribute('key', i);
        // daysContainer.appendChild(singleDay);
    }
};

addMonthDays(currentMonth, currentYear);
// console.log(daysContainer);
// console.log(daysofCurrentMonth);
// function showCalender(month, year) {
//     let firstDay = new Date(year, month).getDay();
//     document.getElementById('showHeader').innerHTML =
//         YearMonthes[month] + ' ' + year;
//     console.log(firstDay);
// }

// function to get how many days in the month
function daysInMonth(iMonth, iYear) {
    console.log(32 - new Date(iYear, iMonth, 32).getDate());

    return 32 - new Date(iYear, iMonth, 32).getDate();
}

// daysInMonth(0, 2022);

// showCalender(currentMonth, currentYear);
