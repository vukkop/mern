const ProductController = require("../controllers/product.controller");

module.exports = function (app) {
  app.get("/api/products/all", ProductController.getAllProducts);
  app.get("/api/products/:id", ProductController.getOneProduct);
  app.post("/api/products", ProductController.createProduct);
  app.put("/api/products/:id", ProductController.updateProduct);
  app.delete("/api/products/:id", ProductController.deleteProduct);
};
