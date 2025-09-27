const { faker } = require("@faker-js/faker");

let users = [];

function addUser() {
  const user = {
    name: faker.person.fullName(), 
    street: faker.location.streetAddress(), 
    country: faker.location.country(), 
  };

  users.push(user); 
}

module.exports = { users, addUser };
