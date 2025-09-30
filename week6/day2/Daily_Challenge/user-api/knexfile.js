module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "postgres", // 👈 حط اليوزر ديالك
      password: "123456", // 👈 الباس ديالك
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
