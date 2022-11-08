'use strict';

// let stores = [seattle, tokyo, dubai, paris, lima];

let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

function hourlyCustomer(minCustomer, maxCustomer) {
    return Math.random() * (maxCustomer - minCustomer) + minCustomer;
};

function Location(store, minCustomer, maxCustomer, avgCookieSale, hourlyCookieSales, totalCookies) {
    this.store = store;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookieSale = avgCookieSale;
    this.hourlyCookieSales = hourlyCookieSales;
};

let location1 = new Location('Seattle', 23, 65, 6.3, [], 0);
let location2 = new Location('Tokyo', 3, 24, 1.2, [], 0);
let location3 = new Location('Dubai', 11, 38, 3.7, [], 0);
let location4 = new Location('Paris', 20, 38, 2.3, [], 0);
let location5 = new Location('Lima', 2, 16, 4.6, [], 0);



// let seattle = {
//     location: 'Seattle',
//     minCustomer: 23,
//     maxCustomer: 65,
//     avgCookieSale: 6.3,
//     hourlyCookieSales: [],
//     totalCookies: 0,
//     cookieSales: function () {
//         for (let i = 0; i < hoursOpen.length; i++) {
//             let hourlyCookies = this.avgCookieSale * hourlyCustomer(this.minCustomer, this.maxCustomer)
//             this.hourlyCookieSales.push(hourlyCookies)
//         }
//         console.log(this.hourlyCookieSales);

//         let parentElement = document.getElementById('cookie');

//         let locationName = document.createElement('h2');
//         locationName.innerText = this.location;
//         parentElement.appendChild(locationName);

//         for (let i = 0; i < hoursOpen.length; i++) {
//             let cookieLi = document.createElement('li');
//             cookieLi.innerText = `${hoursOpen[i]}: ${this.hourlyCookieSales} cookies`;
//             parentElement.appendChild(cookieLi)
//         }

//     }
// }
// seattle.cookieSales();

// let tokyo = {
//     location: 'Tokyo',
//     minCustomer: 3,
//     maxCustomer: 24,
//     avgCookieSale: 1.2,
//     hourlyCookieSales: [],
//     totalCookies: 0,
//     cookieSales: function () {
//         for (let i = 0; i < hoursOpen.length; i++) {
//             let hourlyCookies = this.avgCookieSale * hourlyCustomer(this.minCustomer, this.maxCustomer)
//             this.hourlyCookieSales.push(hourlyCookies)
//         }
//         console.log(this.hourlyCookieSales);

//         let parentElement = document.getElementById('cookie');

//         let locationName = document.createElement('h2');
//         locationName.innerText = this.location;
//         parentElement.appendChild(locationName);

//         for (let i = 0; i < hoursOpen.length; i++) {
//             let cookieLi = document.createElement('li');
//             cookieLi.innerText = `${hoursOpen[i]}: ${this.hourlyCookieSales} cookies`;
//             parentElement.appendChild(cookieLi)
//         }

//     }
// }
// tokyo.cookieSales();

// let dubai = {
//     location: 'Dubai',
//     minCustomer: 11,
//     maxCustomer: 38,
//     avgCookieSale: 3.7,
//     hourlyCookieSales: [],
//     totalCookies: 0,
//     cookieSales: function () {
//         for (let i = 0; i < hoursOpen.length; i++) {
//             let hourlyCookies = this.avgCookieSale * hourlyCustomer(this.minCustomer, this.maxCustomer)
//             this.hourlyCookieSales.push(hourlyCookies)
//         }
//         console.log(this.hourlyCookieSales);

//         let parentElement = document.getElementById('cookie');

//         let locationName = document.createElement('h2');
//         locationName.innerText = this.location;
//         parentElement.appendChild(locationName);

//         for (let i = 0; i < hoursOpen.length; i++) {
//             let cookieLi = document.createElement('li');
//             cookieLi.innerText = `${hoursOpen[i]}: ${this.hourlyCookieSales} cookies`;
//             parentElement.appendChild(cookieLi)
//         }

//     }
// }
// dubai.cookieSales();

// let paris = {
//     location: 'Paris',
//     minCustomer: 20,
//     maxCustomer: 38,
//     avgCookieSale: 2.3,
//     hourlyCookieSales: [],
//     totalCookies: 0,
//     cookieSales: function () {
//         for (let i = 0; i < hoursOpen.length; i++) {
//             let hourlyCookies = this.avgCookieSale * hourlyCustomer(this.minCustomer, this.maxCustomer)
//             this.hourlyCookieSales.push(hourlyCookies)
//         }
//         console.log(this.hourlyCookieSales);

//         let parentElement = document.getElementById('cookie');

//         let locationName = document.createElement('h2');
//         locationName.innerText = this.location;
//         parentElement.appendChild(locationName);

//         for (let i = 0; i < hoursOpen.length; i++) {
//             let cookieLi = document.createElement('li');
//             cookieLi.innerText = `${hoursOpen[i]}: ${this.hourlyCookieSales} cookies`;
//             parentElement.appendChild(cookieLi)
//         }

//     }
// }
// paris.cookieSales();

// let lima = {
//     location: 'Lima',
//     minCustomer: 2,
//     maxCustomer: 16,
//     avgCookieSale: 4.6,
//     hourlyCookieSales: [],
//     totalCookies: 0,
//     cookieSales: function () {
//         for (let i = 0; i < hoursOpen.length; i++) {
//             let hourlyCookies = this.avgCookieSale * hourlyCustomer(this.minCustomer, this.maxCustomer)
//             this.hourlyCookieSales.push(hourlyCookies)
//         }
//         console.log(this.hourlyCookieSales);

//         let parentElement = document.getElementById('cookie');

//         let locationName = document.createElement('h2');
//         locationName.innerText = this.location;
//         parentElement.appendChild(locationName);

//         for (let i = 0; i < hoursOpen.length; i++) {
//             let cookieLi = document.createElement('li');
//             cookieLi.innerText = `${hoursOpen[i]}: ${this.hourlyCookieSales} cookies`;
//             parentElement.appendChild(cookieLi)
//         }

//     }
// }
// lima.cookieSales();