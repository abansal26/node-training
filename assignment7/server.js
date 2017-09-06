var express = require("express");
var app = express();

var allClients = require("./allClients.js");
var infoClient = require("./infoClient.js");
var deleteClient = require("./deleteClient.js");
var listClient = require("./listClient.js");
var createClient = require("./createClient.js");

app.use("/clients", allClients);
app.use("/clients/info", infoClient);
app.use("/clients/delete", deleteClient);
app.use("/clients", listClient);
app.use("/createclient", createClient);

app.listen(3000);
