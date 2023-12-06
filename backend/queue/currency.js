"use strict";

const { REDIS_URI } = require("@config");
const Bull = require('bull');
const { Currency } = require("@events");
const faker = require('faker');

const cronJobInterval = '*/5 * * * * *'; // Run every 10 seconds

// ------------------------- Queue -------------------------

const QUEUE = {};

QUEUE["currencyUpdate"] = new Bull('currencyUpdate', REDIS_URI);

// ------------------------- Consumers -------------------------

Object
  .keys(QUEUE)
  .forEach(async (symbol) => {
    const Queue = QUEUE[symbol];

    // ------------------------- Consumer -------------------------

    const job = await Queue.add({}, {
      repeat: { cron: cronJobInterval }
    });

    Queue
      .process( async function currencyQueue(job) {
        console.log('Running my cron job at:', new Date());
      })
      .catch((error) => {
        console.log("error")
      });

    // ------------------------- Events -------------------------

    Queue.on(
      "completed",
      async () => Currency.emit("",{"data":[
          {
            "name": "BNB",
            "symbol": "BNB",
            "price": faker.finance.amount(300, 350, 2),
            "24h_change": faker.finance.amount(-10, 10, 2) + '%',
            "market_cap": faker.finance.amount(10000, 100000, 0) + "M"
          },
          {
            "name": "Bitcoin",
            "symbol": "BTC",
            "price": faker.finance.amount(24000, 26000, 2),
            "24h_change": faker.finance.amount(-10, 10, 2) + '%',
            "market_cap": faker.finance.amount(10000, 100000, 0) + "M"
          },
          {
            "name": "Ethereum",
            "symbol": "ETH",
            "price": faker.finance.amount(1500, 2000, 2),
            "24h_change": faker.finance.amount(-10, 10, 2) + '%',
            "market_cap": faker.finance.amount(1000, 100000, 0) + "M"
          },
          {
            "name": "Tether",
            "symbol": "USDT",
            "price": faker.finance.amount(1, 1.1, 5),
            "24h_change": faker.finance.amount(-10, 10, 2) + '%',
            "market_cap": faker.finance.amount(1000, 100000, 0) + "M"
          },
          {
            "name": "Dock",
            "symbol": "DOCK",
            "price": faker.finance.amount(0, 1, 4),
            "24h_change": faker.finance.amount(-10, 10, 2) + '%',
            "market_cap": faker.finance.amount(1, 100, 0) + "M"
          }
        ]
      }),
    );
  });

// ------------------------- Exports -------------------------
module.exports = QUEUE;
