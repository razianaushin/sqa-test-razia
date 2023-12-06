"use strict";

const { get } = require("@controllers");
const { Router } = require("express");

const router = Router();

router.route("/")
  .get(get);

module.exports = router;
