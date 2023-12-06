"use strict";

const { get } = require("@controllers");
const { HTTPError, NotFound } = require("@errors");
const cors = require("cors");
const { Router, ...express } = require("express");
const path = require("path");
const v1Routes = require("./v1");

const router = Router();

// ------------------------- Middlewares ----------------------------

router
  .use(cors())
  .use(express.static(
    path.resolve(__dirname, "..", "..", "public"),
    {
      index: false,
    },
  ));

// ------------------------- Routes ---------------------------------

router.route("/")
  .get(get);

router
  .use(v1Routes);

// ------------------------- Error Handlers -------------------------
/**
 * Handle not found [404]
 */
router.use((req, res, next) => next(new NotFound()));

// ------------------------- Exports --------------------------------

module.exports = router;
