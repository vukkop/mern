const { Author } = require("../models/authors.model");

module.exports.getAllAuthors = (request, response) => {
  Author.find()
    .then((allAuthors) => {
      response.json(allAuthors);
    })
    .catch((err) => response.json(err));
};

module.exports.getOneAuthor = async (request, response) => {
  try {
    const oneAuthor = await Author.findOne({ _id: request.params.id });
    response.json(oneAuthor);
  } catch (err) {
    response.json(err);
  }
};

module.exports.createAuthor = (request, response) => {
  Author.create(request.body)
    .then((newAuthor) => response.json(newAuthor))
    .catch((err) => response.status(400).json(err));
};

module.exports.updateAuthor = async (request, response) => {
  try {
    const updateAuthor = await Author.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true, runValidators: true }
    );
    response.json(updateAuthor);
  } catch (err) {
    response.status(400).json(err);
  }
};

module.exports.deleteAuthor = (request, response) => {
  Author.deleteOne({ _id: request.params.id })
    .then((result) => {
      response.json(result);
    })
    .catch((err) => response.json(err));
};
