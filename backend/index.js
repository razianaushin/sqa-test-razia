"use strict";

require("module-alias/register");

const { API_PORT, WEB_SOCKET_SERVER_PORT } = require("@config");
const { currency } = require("@queue");
const util = require("util");
const express = require("./server");
const {webSocketServer} = require("./websocket-server");

// ------------------------- HTTP Server ---------------------------------

const server = express.listen(API_PORT, () => console.log(`HTTP Server Listening at :${ API_PORT }`));

// ------------------------- Web Socket Server ---------------------------

webSocketServer.listen(() => console.log(`WS Server Listening at :${ WEB_SOCKET_SERVER_PORT }`));

// ------------------------- Graceful Shutdown --------------------------

async function shutdown() {
  try {
    const closeHTTPServer = util.promisify(server.close.bind(server));
    const closeWSServer = util.promisify(webSocketServer.server.close.bind(webSocketServer.server));
    const currency_queues = Object.values(currency);

    // First: stop receiving new requests!
    await Promise.all([
      closeHTTPServer(),
      closeWSServer(),
    ]);

    // Second: stop processing new queue jobs!
    await Promise.all(currency_queues.map(queue => queue.close()));

    process.exit(0);
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
