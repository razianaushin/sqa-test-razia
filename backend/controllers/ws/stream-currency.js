"use strict";

const { Currency } = require("@events");
const { wrapAsyncFn } = require("@utils");

module.exports = async function streamCurrencyWSController(req, res) {

  const listener = wrapAsyncFn(async (data) => {
    res.send(data)
  });

  Currency.on("",listener);

  req.once("closed", () => Currency.off("",listener));
};
