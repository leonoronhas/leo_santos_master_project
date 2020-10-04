const books = [];

exports.getBook = (req, res, next) => {
  res.render("pages/prove02/prove02Input", {
    pageTitle: "Add Book",
    path: "/prove/prove02Input/add-book",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.addBook = (req, res, next) => {
  books.push({
    title: req.body.title,
    summary: req.body.summary,
  });
  res.redirect("/prove/prove02");
};

exports.getBookData = (req, res, next) => {
  res.render("pages/prove02/prove02", {
    prods: books,
    pageTitle: "Prove 02",
    path: "/prove02/prove02",
    hasBooks: books.length > 0,
    activeBook: true,
    bookCSS: true,
  });
};
