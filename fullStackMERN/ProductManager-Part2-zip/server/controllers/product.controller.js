const { Product } = require("../models/product.model");

module.exports.getAllProducts = (request, response) => {
  Product.find()
    .then((allProducts) => {
      response.json(allProducts);
    })
    .catch((err) => response.json(err));
};

module.exports.getOneProduct = async (request, response) => {
  try {
    const oneProduct = await Product.findOne({ _id: request.params.id });
    response.json(oneProduct);
  } catch (err) {
    response.json(err);
  }
};

module.exports.createProduct = (request, response) => {
  Product.create(request.body)
    .then((newProduct) => response.json(newProduct))
    .catch((err) => response.json(err));
};

module.exports.updateProduct = async (request, response) => {
  try {
    const updateProduct = await Product.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true, runValidators: true }
    );
    response.json(updateProduct);
  } catch (err) {
    response.json(err);
  }
};

module.exports.deleteProduct = (request, response) => {
  Product.deleteOne({ _id: request.params.id })
    .then((result) => {
      response.json(result);
    })
    .catch((err) => response.json(err));
};
