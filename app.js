'use strict';

// let stores = [seattle, tokyo, dubai, paris, lima];

let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

let seattle = {
    location = 'Seattle',
    minCustomer = 23,
    maxCustomer = 65,
    avgCookieSale = 6.3,
    hourlyCookieSales=[],
    randonNum: function (minCustomer, maxCustomer) {
        return Math.random() * (max - min) + min;
    }
}

let tokyo = {
    location = 'Tokyo',
    minCustomer = 3,
    maxCustomer = 24,
    avgCookieSale = 1.2,
    hourlyCookieSales=[],
    randonNum: function (minCustomer, maxCustomer) {
        return Math.random() * (max - min) + min;
    }
}

let dubai = {
    location = 'Dubai',
    minCustomer = 11,
    maxCustomer = 38,
    avgCookieSale = 3.7,
    hourlyCookieSales=[],
    randonNum: function (minCustomer, maxCustomer) {
        return Math.random() * (max - min) + min;
    }
}

let paris = {
    location = 'Paris',
    minCustomer = 20,
    maxCustomer = 38,
    avgCookieSale = 2.3,
    hourlyCookieSales=[],
    randonNum: function (minCustomer, maxCustomer) {
        return Math.random() * (max - min) + min;
    }
}

let lima = {
    location = 'Lima',
    minCustomer = 2,
    maxCustomer = 16,
    avgCookieSale = 4.6,
    hourlyCookieSales=[],
    randonNum: function (minCustomer, maxCustomer) {
        return Math.random() * (max - min) + min;
    }
}