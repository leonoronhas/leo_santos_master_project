const path = require("path");
const express = require("express");
const router = express.Router();

const prove02Data = require("./prove02Input");

router.get("/", prove02Data.routes);

module.exports = router;
