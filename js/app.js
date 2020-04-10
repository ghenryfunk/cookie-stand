'use strict';
console.log('Hello World');

// The minimum number of customers per hour.
// The maximum number of customers per hour.
// The average number of cookies purchased per customer.

// I need to make a customer facing webpage (html + css) for Pat's new business, that can also calculate (js) the number of cookies each location must make every day so that Pat can manage supplies inventory and baking schedule.
// need to design documents, color scheme, fonts, and any images in addition to the logo

// build an application that calculates daily sales projection for each location on sales.html
// homepage goes on index.html

// create an object literal (pg 102) for each store (Seattle, Tokyo, Dubai, Paris, and Lima)
// global hours variable
var hoursOpenPerDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// create Seattle Object
var seattleLocation = {
  // put in 6 properties
  location: 'Seattle',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  calculatedCookiesPerHourArray: [],
  totalCookies: 0,
  // put in method to generate random number of customers
  getRandomNumberOfCustomersPerHour: function() {
    var getRandomNumberOfCustomersPerHour = (Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers);
    console.log(getRandomNumberOfCustomersPerHour);
    return getRandomNumberOfCustomersPerHour;
  },
  // calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
  // I need to multiply avgCookiesPerCustomer by the randomNumberOfCustomersPerHour and return the results in an array
  calculatedCookiesPerHour: function() {
    for(var i = 0; i < hoursOpenPerDay.length; i++){
      var calculatedCookiesPerHour = (Math.floor(this.avgCookiesPerCustomer * this.getRandomNumberOfCustomersPerHour()));
      this.calculatedCookiesPerHourArray.push(calculatedCookiesPerHour);
      this.totalCookies += calculatedCookiesPerHour;
    }
  },
  render: function() { // I need to render the list of 1. hour of the day 2. number of cookies and 3. total at the very bottom
    var pElLocation = document.getElementById('seattleLocation');
    var liElLocation = document.createElement('li');
    liElLocation.textContent = `${this.location}`;
    pElLocation.appendChild(liElLocation);
    for(var i = 0; i < hoursOpenPerDay.length; i++){
      // anchor data to the parent element
      var pElCookies = document.getElementById('seattleCookies');
      //create element
      var liElCookies = document.createElement('li');
      // give it content
      liElCookies.textContent = `${hoursOpenPerDay[i]}: ${this.calculatedCookiesPerHourArray[i]} cookies`;
      // append the child to the parent
      pElCookies.appendChild(liElCookies);
    }
    var pElTotal = document.getElementById('seattleTotal');
    var liElTotal = document.createElement('li');
    liElTotal.textContent = `Total: ${this.totalCookies} cookies`;
    pElTotal.appendChild(liElTotal);
  }

  // Store the results for each location in a seperate array property within the object (calculatedCookiesPerHourArray)
  // calculatedCookiesPerHourArrayDisplay: function() {
  //   for()
  // }
};
// var calculatedCookiesPerHourArray = seattleLocation.calculatedCookiesPerHour();
// console.log(calculatedCookiesPerHourArray);

//invoke to calculate --> will still need to invoke to render
seattleLocation.calculatedCookiesPerHour();
//invoke the render method
// Display the values of each array as an UNORDERD LIST in the browser (sales.html)
seattleLocation.render();

// console.log(seattleLocation.getRandomNumberOfCustomersPerHour());
// console.log(seattleLocation);


// each object needs 6 properties: minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer, location, hoursOpen and calculatedCookiesPerHourArray
// each object will need a method (aka a function) to generate a random number of customers per hour

var tokyoLocation = {
  location: 'Tokyo',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  calculatedCookiesPerHourArray: [],
  totalCookies: 0,

  getRandomNumberOfCustomersPerHour: function() {
    var getRandomNumberOfCustomersPerHour = (Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers);
    console.log(getRandomNumberOfCustomersPerHour);
    return getRandomNumberOfCustomersPerHour;
  },
  calculatedCookiesPerHour: function() {
    for(var i = 0; i < hoursOpenPerDay.length; i++){
      var calculatedCookiesPerHour = (Math.floor(this.avgCookiesPerCustomer * this.getRandomNumberOfCustomersPerHour()));
      this.calculatedCookiesPerHourArray.push(calculatedCookiesPerHour);
      this.totalCookies += calculatedCookiesPerHour;
    }
  },
  render: function() {
    var pElLocation = document.getElementById('tokyoLocation');
    var liElLocation = document.createElement('li');
    liElLocation.textContent = `${this.location}`;
    pElLocation.appendChild(liElLocation);
    for(var i = 0; i < hoursOpenPerDay.length; i++){
      var pElCookies = document.getElementById('tokyoCookies');
      var liElCookies = document.createElement('li');
      liElCookies.textContent = `${hoursOpenPerDay[i]}: ${this.calculatedCookiesPerHourArray[i]} cookies`;
      pElCookies.appendChild(liElCookies);
    }
    var pElTotal = document.getElementById('tokyoTotal');
    var liElTotal = document.createElement('li');
    liElTotal.textContent = `Total: ${this.totalCookies} cookies`;
    pElTotal.appendChild(liElTotal);
  }
};
tokyoLocation.calculatedCookiesPerHour();
tokyoLocation.render();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DUBAI
var dubaiLocation = {
  location: 'Dubai',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  calculatedCookiesPerHourArray: [],
  totalCookies: 0,

  getRandomNumberOfCustomersPerHour: function() {
    var getRandomNumberOfCustomersPerHour = (Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers);
    console.log(getRandomNumberOfCustomersPerHour);
    return getRandomNumberOfCustomersPerHour;
  },
  calculatedCookiesPerHour: function() {
    for(var i = 0; i < hoursOpenPerDay.length; i++){
      var calculatedCookiesPerHour = (Math.floor(this.avgCookiesPerCustomer * this.getRandomNumberOfCustomersPerHour()));
      this.calculatedCookiesPerHourArray.push(calculatedCookiesPerHour);
      this.totalCookies += calculatedCookiesPerHour;
    }
  },
  render: function() {
    var pElLocation = document.getElementById('dubaiLocation');
    var liElLocation = document.createElement('li');
    liElLocation.textContent = `${this.location}`;
    pElLocation.appendChild(liElLocation);
    for(var i = 0; i < hoursOpenPerDay.length; i++){
      var pElCookies = document.getElementById('dubaiCookies');
      var liElCookies = document.createElement('li');
      liElCookies.textContent = `${hoursOpenPerDay[i]}: ${this.calculatedCookiesPerHourArray[i]} cookies`;
      pElCookies.appendChild(liElCookies);
    }
    var pElTotal = document.getElementById('dubaiTotal');
    var liElTotal = document.createElement('li');
    liElTotal.textContent = `Total: ${this.totalCookies} cookies`;
    pElTotal.appendChild(liElTotal);
  }
};
dubaiLocation.calculatedCookiesPerHour();
dubaiLocation.render();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PARIS

var parisLocation = {
  location: 'Paris',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  calculatedCookiesPerHourArray: [],
  totalCookies: 0,

  getRandomNumberOfCustomersPerHour: function() {
    var getRandomNumberOfCustomersPerHour = (Math.floor(Math.random() *(this.maxHourlyCustomers - this.minHourlyCustomers +1)) + this.minHourlyCustomers);
    return getRandomNumberOfCustomersPerHour;
  },
  calculatedCookiesPerHour: function() {
    for(var i = 0; i < hoursOpenPerDay.length; i++){
      var calculatedCookiesPerHour = (Math.floor(this.avgCookiesPerCustomer * this.getRandomNumberOfCustomersPerHour()));
      this.calculatedCookiesPerHourArray.push(calculatedCookiesPerHour);
      this.totalCookies += calculatedCookiesPerHour;
    }
  },
  render: function() {
    var pElLocation = document.getElementById('parisLocation');
    var liElLocation = document.createElement('li');
    liElLocation.textContent = `${this.location}`;
    pElLocation.appendChild(liElLocation);
    for(var i = 0; i < hoursOpenPerDay.length; i++){
      var pElCookies = document.getElementById('parisCookies');
      var liElCookies = document.createElement('li');
      liElCookies.textContent = `${hoursOpenPerDay[i]}: ${this.calculatedCookiesPerHourArray[i]} cookies`;
      pElCookies.appendChild(liElCookies);
    }
    var pElTotal = document.getElementById('parisTotal');
    var liElTotal = document.createElement('li');
    liElTotal.textContent = `Total: ${this.totalCookies} cookies`;
    pElTotal.appendChild(liElTotal);
  }
};

parisLocation.calculatedCookiesPerHour();
parisLocation.render();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lima


var limaLocation = {
  location: 'Lima',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  calculatedCookiesPerHourArray: [],
  totalCookies: 0,

  getRandomNumberOfCustomersPerHour: function() {
    var getRandomNumberOfCustomersPerHour = (Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers);
    return getRandomNumberOfCustomersPerHour;
  },
  calculatedCookiesPerHour: function() {
    for(var i = 0; i < hoursOpenPerDay.length; i++) {
      var calculatedCookiesPerHour = (Math.floor(this.avgCookiesPerCustomer * this.getRandomNumberOfCustomersPerHour()));
      this.calculatedCookiesPerHourArray.push(calculatedCookiesPerHour);
      this.totalCookies += calculatedCookiesPerHour;
    }
  },
  render: function() {
    var pElLocation = document.getElementById('limaLocation');
    var liElLocation = document.createElement('li');
    liElLocation.textContent = `${this.location}`;
    pElLocation.appendChild(liElLocation);
    for(var i = 0; i < hoursOpenPerDay.length; i++) {
      var pElCookies = document.getElementById('limaCookies');
      var liElCookies = document.createElement('li');
      liElCookies.textContent = `${hoursOpenPerDay[i]}: ${this.calculatedCookiesPerHourArray[i]} cookies`;
      pElCookies.appendChild(liElCookies);
    }
    var pElTotal = document.getElementById('limaTotal');
    var liElTotal = document.createElement('li');
    liElTotal.textContent = `Total: ${this.totalCookies} cookies`;
    pElTotal.appendChild(liElTotal);
  }
};

limaLocation.calculatedCookiesPerHour();
limaLocation.render();
