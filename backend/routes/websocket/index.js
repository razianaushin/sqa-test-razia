"use strict";

const { ws } = require("@controllers");
const { WebSocket: { Router } } = require("@lib");

const router = new Router();

// TODO: versioning.

router
  .on("/currency", ws.streamCurrency)

module.exports = router;
