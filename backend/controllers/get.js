"use strict";

const { name, version } = require("@root/package.json");

const CONTROLLER = [
  function get(req, res) {
    res.json({
      name,
      version,
    });
  },
];

module.exports = CONTROLLER;
