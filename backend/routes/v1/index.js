"use strict";

const { Router } = require("express");
const currencies = require("./currencies");

const router = Router();

router
  .use(currencies);

module.exports = Router().use("/v1", router);
