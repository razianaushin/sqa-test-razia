"use strict";

// ------------------------- Controller -------------------------

const CONTROLLER = [
  async function listCurrenciesV1Controller(req, res) {

    let currencies = [
      {
        "logo_png": "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
        "logo_svg": "https://cryptologos.cc/logos/binance-coin-bnb-logo.svg",
        "name": "BNB",
        "symbol": "BNB",
        "price": 317.4,
        "24h_change": "0.76%",
        "market_cap": "50117M"
      },
      {
        "logo_png": "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
        "logo_svg": "https://cryptologos.cc/logos/bitcoin-btc-logo.svg",
        "name": "Bitcoin",
        "symbol": "BTC",
        "price": 24727,
        "24h_change": "-0.56%",
        "market_cap": "477153M"
      },
      {
        "logo_png": "https://cryptologos.cc/logos/ethereum-eth-logo.png",
        "logo_svg": "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
        "name": "Ethereum",
        "symbol": "ETH",
        "price": 1707,
        "24h_change": "0.84%",
        "market_cap": "208946M"
      },
      {
        "logo_png": "https://cryptologos.cc/logos/tether-usdt-logo.png",
        "logo_svg": "https://cryptologos.cc/logos/tether-usdt-logo.svg",
        "name": "Tether",
        "symbol": "USDT",
        "price": 1.01,
        "24h_change": "0.01%",
        "market_cap": "23127M"
      },
      {
        "logo_png": "https://cryptologos.cc/logos/dock-dock-logo.png",
        "logo_svg": "https://cryptologos.cc/logos/dock-dock-logo.svg",
        "name": "Dock",
        "symbol": "DOCK",
        "price": 0.4611,
        "24h_change": "-0.99%",
        "market_cap": "277M"
      }
    ]

    res.json({
      currencies,
    });
  },
];

// ------------------------- Exports ----------------------------

module.exports = CONTROLLER;
