const products = require("../../data/products.json");
const ITEMS_PER_PAGE = 2;

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
  const page = +req.query.page || 1;
  let totalItems = products.length;
  let offset = (page - 1) * ITEMS_PER_PAGE;
  let paginatedItems = products.slice(offset).slice(0, ITEMS_PER_PAGE);
  res.render("pages/project/store", {
    prods: paginatedItems,
    pageTitle: "Store",
    path: "/",
    hasBooks: products.length > 0,
    activeProduct: true,
    productCSS: true,
    currentPage: page,
    hasNextPage: ITEMS_PER_PAGE * page < totalItems,
    hasPreviousPage: page > 1,
    nextPage: page + 1,
    previousPage: page - 1,
    lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE),
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
