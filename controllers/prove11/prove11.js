exports.getAvengers = (req, res, next) => {
    res.render("pages/prove11/prove11", {
      pageTitle: "Avengers",
      path: "/prove/prove11/fetchAll",
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  };