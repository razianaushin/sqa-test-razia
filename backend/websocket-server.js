"use strict";

const { EventHandlerHook, OnCloseEventEmitterHook } = require("@hooks");
const routes = require("@routes/websocket");
const {
  WebSocket: { Server },
} = require("@lib");
const { WEB_SOCKET_SERVER_PORT } = require("@config");
// ------------------------- Web Socket Initializations -----------------

const server = new Server({
  port: WEB_SOCKET_SERVER_PORT,
});

// ------------------------- Web Socket Hooks Settings ------------------

server
  .useFirst(EventHandlerHook)
  .use(OnCloseEventEmitterHook, { event: "closed" })
  .use(routes);

module.exports = {webSocketServer:server};
