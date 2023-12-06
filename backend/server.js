"use strict";
const routes = require("@routes");
const express = require("express");

// ------------------------- Server ---------------------------

const server = express();


// ------------------------- Settings -------------------------
server.set("view engine", "ejs");


// ------------------------- Routes ---------------------------

server.use(routes);

// ------------------------- Exports --------------------------

module.exports = server;
