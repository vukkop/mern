const express = require("express");
const app = express();
const port = 8000;
// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker } = require("@faker-js/faker");

const createUser = () => {
  const newUser = {
    _id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number("###-###-####"),
    password: faker.internet.password(),
  };
  return newUser;
};

const createCompany = () => {
  const newCompany = {
    _id: faker.string.uuid(),
    name: faker.company.name(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    },
  };
  return newCompany;
};

const createUserWithCompany = () => {
  const newUserWithCompany = {
    user: createUser(),
    company: createCompany(),
  };
  return newUserWithCompany;
};

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});
app.get("/api/users/new", (req, res) => {
  res.json(createUser());
});
app.get("/api/companies/new", (req, res) => {
  res.json(createCompany());
});
app.get("/api/user/company", (req, res) => {
  res.json(createUserWithCompany());
});

const server = app.listen(port, () =>
  console.log(`listening on port: ${server.address().port}!`)
);
