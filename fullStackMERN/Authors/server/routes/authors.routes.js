const AuthorsController = require("../controllers/authors.controller");

module.exports = function (app) {
  app.get("/api/authors/all", AuthorsController.getAllAuthors);
  app.get("/api/authors/:id", AuthorsController.getOneAuthor);
  app.post("/api/authors", AuthorsController.createAuthor);
  app.put("/api/authors/:id", AuthorsController.updateAuthor);
  app.delete("/api/authors/:id", AuthorsController.deleteAuthor);
};
