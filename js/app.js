'use strict';


let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Location(store, minCustomer, maxCustomer, avgCookieSale) {
    this.store = store;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookieSale = avgCookieSale;
    this.hourlyCookieSales = [];
    this.totalCookies = 0;
};

function hourlyCustomer(minCustomer, maxCustomer) {
    return Math.random() * (maxCustomer - minCustomer) + minCustomer;
};

Location.prototype.cookieSales = function () {
    for (let i = 0; i < hoursOpen.length; i++) {
        let hourlyCookies = Math.floor(this.avgCookieSale * hourlyCustomer(this.minCustomer, this.maxCustomer));
        this.hourlyCookieSales.push(hourlyCookies);
        this.totalCookies += hourlyCookies;
    }

};

function renderTH() {
    let tableHead = document.getElementById('tableHead');
    let hoursRow = document.createElement('tr');
    let hoursCell = document.createElement('th');
    hoursRow.appendChild(hoursCell);

    for (let i = 0; i < hoursOpen.length; i++) {
        let hourlyCell = document.createElement('th');
        hourlyCell.innerText = hoursOpen[i];
        hoursRow.appendChild(hourlyCell);

    };
    let hoursTotal = document.createElement('th');
    hoursTotal.innerText = "Daily Location Total";
    hoursRow.appendChild(hoursTotal);
    tableHead.appendChild(hoursRow);
};

function renderTF() {
    let tableFoot = document.getElementById('tableFoot');
    let totalRow = document.createElement('tr');
    let totalCell = document.createElement('th');
    totalCell.innerText = "Totals:";
    totalRow.appendChild(totalCell);

    let cookiesTotal = 0;
    for (let i = 0; i < hoursOpen.length; i++) {
        let hourCookies = 0;
        for (let j = 0; j < stores.length; j++) {
            hourCookies += stores[j].hourlyCookieSales[i];
            cookiesTotal += stores[j].hourlyCookieSales[i];
        };

        let hoursTotal = document.createElement('td');
        hoursTotal.innerText = hourCookies;
        totalRow.appendChild(hoursTotal);
    }
    let allCookies = document.createElement('td');
    allCookies.innerText = cookiesTotal;
    totalRow.appendChild(allCookies);
    tableFoot.appendChild(totalRow);
};

Location.prototype.render = function () {
    this.cookieSales();
    let tableBody = document.getElementById('tableBody');
    let cookiesRow = document.createElement('tr');
    let locationCell = document.createElement('th');
    locationCell.innerText = this.store;
    cookiesRow.appendChild(locationCell);

    for (let i = 0; i < hoursOpen.length; i++) {
        let cookieSalesPerHour = document.createElement('td');
        cookieSalesPerHour.innerText = this.hourlyCookieSales[i];
        cookiesRow.appendChild(cookieSalesPerHour);
    };
    let cookieData = document.createElement('td');
    cookieData.innerText = this.totalCookies;
    cookiesRow.appendChild(cookieData);
    tableBody.appendChild(cookiesRow);
};

let location1 = new Location('Seattle', 23, 65, 6.3);
let location2 = new Location('Tokyo', 3, 24, 1.2);
let location3 = new Location('Dubai', 11, 38, 3.7);
let location4 = new Location('Paris', 20, 38, 2.3);
let location5 = new Location('Lima', 2, 16, 4.6);

let stores = [location1, location2, location3, location4, location5];

let standForm = document.getElementById('standForm');
standForm.addEventListener('submit', addStand);

function addStand(event) {
    event.preventDefault();
    let form = event.target;
    let store = form.standLocation.value;
    let minCustomer = form.standMin.value;
    let maxCustomer = form.standMax.value;
    let avgCookieSale = form.standAvg.value;
    let location = new Location(store, minCustomer, maxCustomer, avgCookieSale);
    stores.push(location);
    location.render();

    tableFoot.innerHTML = "";
    renderTF();
};

renderTH();
location1.render();
location2.render();
location3.render();
location4.render();
location5.render();
renderTF();
