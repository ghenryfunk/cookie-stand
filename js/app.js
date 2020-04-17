'use strict';

var hoursOpenPerDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var storeArray = [];

function Store(location, minCust, maxCust, avgCookies){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookiesPerHourArray = [];

  this.cookiesPerHour();

  storeArray.push(this);
}

Store.prototype.randomCust = function(){
  var randomCust = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  return randomCust;
};

Store.prototype.cookiesPerHour = function(){
  for(var i = 0; i < hoursOpenPerDay.length; i++){
    var cookiesPerHour = (Math.floor(this.avgCookies * this.randomCust()));
    this.cookiesPerHourArray.push(cookiesPerHour);
    this.totalCookies += cookiesPerHour;
  }
};

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

var salesTable = document.getElementById('table');

function renderHeader() {
  var trEl = document.createElement('tr');
  salesTable.appendChild(trEl);
  var thElEmpty = document.createElement('th');
  trEl.appendChild(thElEmpty);

  for(var i = 0; i < hoursOpenPerDay.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = hoursOpenPerDay[i];
    trEl.appendChild(thEl);
  }
  var thTotal = document.createElement('th');
  thTotal.textContent = 'Daily Location Total';
  trEl.appendChild(thTotal);
}
renderHeader();

function renderStores(){
  for(var i = 0; i < storeArray.length; i++){
    var trStore = document.createElement('tr');
    salesTable.appendChild(trStore);
    var tdStore = document.createElement('td');
    tdStore.textContent = storeArray[i].location;
    trStore.appendChild(tdStore);
    var totalCookies = 0;

    for(var j = 0; j < storeArray[i].cookiesPerHourArray.length; j++){
      var tdCookies = document.createElement('td');
      tdCookies.textContent = storeArray[i].cookiesPerHourArray[j];
      trStore.appendChild(tdCookies);
      totalCookies += storeArray[i].cookiesPerHourArray[j];
    }

    var tdTotal = document.createElement('td');
    tdTotal.textContent = totalCookies;
    trStore.appendChild(tdTotal);
  }
}
renderStores();

function renderFooter(){
  var trFooter = document.createElement('tr');
  salesTable.appendChild(trFooter);
  var tdLabel = document.createElement('td');
  var DailyLocationTotals = 0;
  tdLabel.textContent = 'Hourly Totals';
  trFooter.appendChild(tdLabel);
  
  for(var i = 0; i < hoursOpenPerDay.length; i++){
    var hourlyTotals = 0;
    var tdFooter = document.createElement('td');
    for(var j = 0; j < storeArray.length; j++){
      hourlyTotals += storeArray[j].cookiesPerHourArray[i];
    }
    tdFooter.textContent = hourlyTotals;
    DailyLocationTotals += hourlyTotals;
    trFooter.appendChild(tdFooter);
  }
  var tdDailyLocationTotals = document.createElement('td');
  tdDailyLocationTotals.textContent = DailyLocationTotals;
  trFooter.appendChild(tdDailyLocationTotals);
}
renderFooter();
