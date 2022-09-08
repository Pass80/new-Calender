// get the date of today
const today = new Date();
// get the current month
let currentMonth = today.getMonth();
// get the current Year
let currentYear = today.getFullYear();
const selectYear = document.getElementById('year');
const selectMonth = document.getElementById('month');
const calender = document.getElementById('calender');
const showYearAndMonth = document.getElementById('showHeader');

const months = [
    'January',
    'February',
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

const days = ['Sun', 'Mon', 'Teu', 'Wed', 'Thu', 'Fri', 'Sat'];

// function to generate a rang of years
const generate_year_range = function (start, end) {
    let years = '';
    for (let year = start; year <= end; year++) {
        years += `<option value= ${year}>${year}</options>`;
    }
    return years;
};

//function to get how many days in the month
function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

// create a function which goes to the next month
const next = () => {
    currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalender(currentMonth, currentYear);
};
// create a function which goes to the previous month
const previous = () => {
    currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    showCalender(currentMonth, currentYear);
};

// create a function which goes to specific month and year
const jump = () => {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalender(currentMonth, currentYear);
};

const showCalender = function (month, year) {
    let firstDay = new Date(year, month).getDay();
    calender.innerHTML = '';
    showYearAndMonth.innerHTML = months[month] + ' ' + year;
    selectYear.value = year;
    selectMonth.value = month;
    // creating the cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement('tr');
        let cell;
        let cellText;
        for (j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                cell = document.createElement('td');
                cellText = document.createTextNode('');
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth(month, year)) {
                break;
            } else {
                cell = document.createElement('td');
                cell.setAttribute('data-date', date);
                cell.setAttribute('data-month', month + 1);
                cell.setAttribute('data-year', year);
                cell.setAttribute('data-month_name', months[month]);
                cell.className = 'date-picker';
                cell.innerHTML = `<span>${date}<span/>`;
                if (
                    date === today.getDate() &&
                    year === today.getFullYear() &&
                    month === today.getMonth()
                ) {
                    cell.className = 'date-picker selected';
                }
                row.appendChild(cell);
                date++;
            }
        }
        calender.appendChild(row);
    }
};

// generate a range of years starting from 1970 till 2050
// and then insert the created years list in the select Tag
selectYear.innerHTML = generate_year_range(1970, 2050);

showCalender(currentMonth, currentYear);
