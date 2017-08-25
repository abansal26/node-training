//Problem : Create a application for a showroom showing 3 types of car having some common data names and some uncommon data names. Use inheritance to accomplish it.
var Vehicle = function(data) {
  this.name = data.name;
  this.model = data.model;
  this.make = data.make;
  this.color = data.color;
};

var SUV = function(data) {
  Vehicle.call(this, data);
  this.airbag = data.airbag;
  this.foglight = data.airbag;
  this.type = "SUV";
  this.avg = "11";
};

SUV.prototype = Vehicle.prototype;

var Sedan = function(data) {
  Vehicle.call(this, data);
  this.airbag = data.airbag;
  this.type = "Sedan";
  this.avg = "15";
};

Sedan.prototype = Vehicle.prototype;

var Hatchback = function(data) {
  Vehicle.call(this, data);
  this.engineinback = data.engineinback;
  this.type = "Hatchback";
  this.avg = "18";
};

Hatchback.prototype = Vehicle.prototype;

var alto = {
  name: "Alto",
  model: "lxi",
  make: "2009",
  color: "Grey",
  engineinback: "No"
};

var Alto = new Hatchback(alto);
console.log(Alto);

var swiftdzire = {
  name: "Swift Dzire",
  model: "vxi",
  make: "2010",
  color: "Silver",
  airbag: "No"
};

var Swiftdzire = new Sedan(swiftdzire);
console.log(Swiftdzire);

var scorpio = {
  name: "Scorpio",
  model: "Storm",
  make: "2009",
  color: "Black",
  airbag: "Yes",
  foglight: "Yes"
};

var Scorpio = new SUV(scorpio);
console.log(Scorpio);