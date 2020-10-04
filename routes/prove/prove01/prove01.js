const express = require("express");
const router = express.Router();

const inputController = require("../../../controllers/prove01/input");

// Get Data from Inputs
router.get("/", inputController.getInputData);

// Post data from inputs
router.post("/submit", inputController.postInputData);

module.exports = router;
