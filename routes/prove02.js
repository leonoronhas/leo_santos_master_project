const path = require('path');
const express = require('express');
const router = express.Router();

const prove02InputData = require("./prove02Input");

router.get('/', (req, res, next) => {
    const books = prove02InputData.books;
    res.render('pages/prove02', {
      prods: books,
      pageTitle: 'Prove 02',
      path: '/prove02',
      hasBooks: books.length > 0,
      activeBook: true,
      bookCSS: true
    });
  });
  
  module.exports = router;