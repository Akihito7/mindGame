const path = require("path");

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "database", "bancoMindGame.db")
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")

    },
    useNullAsDefault: true
  }

};
