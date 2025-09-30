module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "postgres", 
      password: "123456", 
      database: "blogdb",
    },
    migrations: {
      directory: "./server/config/migrations",
    },
    seeds: {
      directory: "./server/config/seeds",
    },
  },
};
