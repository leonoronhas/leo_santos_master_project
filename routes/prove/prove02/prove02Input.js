const path = require("path");
const express = require("express");
const router = express.Router();

const bookController = require("../../../controllers/prove02/book");

// /prove02/add-book -> GET
router.get("/add-book", bookController.getBook);

// /prove02/add-book -> POST
router.post("/add-book", bookController.addBook);

// /prove02 -> GET
router.get("/", bookController.getBookData);

exports.routes = router;
