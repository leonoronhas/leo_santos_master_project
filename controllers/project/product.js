const products = require("../../data/products.json");

// Funciton that will return the item based on the id
function findId(idToLookFor) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id == idToLookFor) {
      const item = {
        id: products[i].id,
        imageUrl: products[i].imageUrl,
        name: products[i].name,
        price: products[i].price,
        description: products[i].description,
      };
      return item;
    }
  }
}

exports.getProducts = (req, res, next) => {
  res.render("pages/project/store", {
    prods: products,
    pageTitle: "Store",
    path: "/",
    hasBooks: products.length > 0,
    activeProduct: true,
    productCSS: true,
  });
};

exports.getDetail = (req, res, next) => {
  const prodId = req.params.productId;
  let item = findId(prodId);
  res.render("pages/project/product-detail", {
    product: item,
    pageTitle: item.name,
    path: "/project",
  });
};
