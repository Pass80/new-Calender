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
const daysContainer = document.getElementById('days');
const daysofCurrentMonth = document.getElementsByClassName('day');
// store the current month in variable
const currentMonth = new Date().getMonth();
const currentDay = new Date().getDay();
// store the day number of the current month in variable
const currentDate = new Date().getDate();
// console.log(currentDay);
// console.log(new Date().getDate());
// console.log(currentMonth);

let currentMonthDays = [];

const addMonthDays = () => {
    let i;
    let singleDay = 0;
    if (
        currentMonth === 3 ||
        currentMonth === 5 ||
        currentMonth === 8 ||
        currentMonth === 10
    ) {
        for (i = 0; i < 30; i++) {
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
        for (i = 0; i < 31; i++) {
            const singleDay = document.createElement('div');
            const textnode = document.createTextNode(i + 1);
            singleDay.appendChild(textnode);
            singleDay.setAttribute('class', 'day');
            singleDay.setAttribute('key', i);
            daysContainer.appendChild(singleDay);
            // console.log(singleDay);
        }
    }
    const styledDay =
        daysContainer.children[currentDate - 1].classList.add('currentDay');
};

addMonthDays();
// console.log(daysContainer);
// console.log(daysofCurrentMonth);
