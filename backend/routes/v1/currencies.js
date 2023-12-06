"use strict";

const { listCurrenciesV1 } = require("@controllers");
const { wrapController } = require("@utils");
const { Router } = require("express");

const router = Router();

// ------------------------- Currencies -------------------------

router.route("/")
  .get(wrapController(listCurrenciesV1));


// ------------------------- Exports -------------------------

module.exports = Router().use("/currencies", router);
