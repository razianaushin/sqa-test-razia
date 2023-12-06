"use strict";

// ------------------------- Exports -------------------------

module.exports = {
  get: require("./get"),
  ...require("./v1"),
  ws: require("./ws"),
};
