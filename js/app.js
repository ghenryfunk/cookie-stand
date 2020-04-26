'use strict';

var hoursOpenPerDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var storeArray = [];
var addStore = document.getElementById('addStore');

var salesTable = document.getElementById('table');
var thead = document.getElementsByTagName('thead')[0];
var tbody = document.getElementById('store-data');
var tfoot = document.getElementsByTagName('tfoot')[0];

function Store(location, minCust, maxCust, avgCookies){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookiesPerHourArray = [];
  this.totalCookies = 0;

  this.generateCookiesSold();

  storeArray.push(this);
}

Store.prototype.generateCookiesSold = function() {
  for(var i = 0; i < hoursOpenPerDay.length; i++){
    var cookiesSold = Math.floor(randomNumber(this.minCust, this.maxCust) * this.avgCookies);

    this.cookiesPerHourArray.push(cookiesSold);
    this.totalCookies += cookiesSold;
  }
};

Store.prototype.render = function() {
  var tr = createElement('tr', '', tbody);
  createElement('td', this.location, tr);

  for(var i = 0; i < this.cookiesPerHourArray.length; i++){
    createElement('td', this.cookiesPerHourArray[i], tr);
  }

  createElement('td', this.totalCookies, tr);
};

function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createElement(element, content, parent){
  var newElement = document.createElement(element);
  newElement.textContent = content;
  parent.appendChild(newElement);
  return newElement;
}

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

function handleSubmit(event){
  event.preventDefault();
  var location = event.target.location.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var avgCookies = parseInt(event.target.avgCookies.value);

  var store = new Store(location, minCust, maxCust, avgCookies);

  event.target.location.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgCookies.value = null;

  store.render();
  renderFooter();
}

addStore.addEventListener('submit', handleSubmit);

function renderHeader(){
  var tr = createElement('tr', '', thead);
  createElement('th', '', tr);

  for(var i = 0; i < hoursOpenPerDay.length; i++){
    createElement('th', hoursOpenPerDay[i], tr);
  }
  createElement('th', 'Daily Location Total', tr);
}
renderHeader();

function renderStores() {
  for(var i = 0; i < storeArray.length; i++){
    storeArray[i].render();
  }
}
renderStores();

function renderFooter() {
  tfoot.textContent = ''; // wipe the footer so we can add new stores and refresh the total in the footer
  var tr = createElement('tr', '', tfoot);
  createElement('td', 'Totals', tr);
  var allTotals = 0;

  for(var i = 0; i < hoursOpenPerDay.length; i++){
    var hourlyTotals = 0;
    for(var j = 0; j < storeArray.length; j++){
      hourlyTotals += storeArray[j].cookiesPerHourArray[i];
      allTotals += storeArray[j].cookiesPerHourArray[i];
    }
    createElement('td', hourlyTotals, tr);
  }
  createElement('td', allTotals, tr);
}
renderFooter();
