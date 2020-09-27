const path = require("path");
const express = require("express");
const router = express.Router();

const books = [];

// get book
router.get("/add-book", (req, res, next) => {
  res.render("pages/prove02Input", {
    pageTitle: "Add Book",
    path: "/prove02Input/add-book",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

// add book title and summary
router.post("/add-book", (req, res, next) => {
  books.push({ 
    title: req.body.title, 
    summary: req.body.summary 
  });
  res.redirect("/prove02");
});

exports.routes = router;
exports.books = books;
