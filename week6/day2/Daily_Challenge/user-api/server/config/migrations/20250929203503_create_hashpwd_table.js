exports.up = function (knex) {
  return knex.schema.createTable("hashpwd", (table) => {
    table.increments("id").primary();
    table.string("username").notNullable().unique();
    table.string("password").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("hashpwd");
};
