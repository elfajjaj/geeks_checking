module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "postgres", // change with your DB username
      password: "123456", // change with your DB password
      database: "userdb",
    },
    migrations: {
      directory: "./server/config/migrations",
    },
    seeds: {
      directory: "./server/config/seeds",
    },
  },
};
