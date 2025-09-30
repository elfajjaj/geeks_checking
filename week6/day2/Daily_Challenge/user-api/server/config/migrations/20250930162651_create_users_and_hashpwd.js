exports.up = async function (knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("email").unique().notNullable();
    table.string("username").unique().notNullable();
    table.string("first_name");
    table.string("last_name");
  });

  await knex.schema.createTable("hashpwd", (table) => {
    table.increments("id").primary();
    table.string("username").notNullable().unique();
    table.string("password").notNullable();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("hashpwd");
  await knex.schema.dropTableIfExists("users");
};
