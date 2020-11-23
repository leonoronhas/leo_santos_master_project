exports.getAvengers = (req, res, next) => {
    res.render("pages/prove10/prove10", {
      pageTitle: "Avengers",
      path: "/prove/prove10/fetchAll",
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  };