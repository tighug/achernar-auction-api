const TypeOrmNamingStrategy = require("./config/TypeOrmNamingStrategy.js");

module.exports = {
  type: "mysql",
  host: process.env.AUCTION_DB_HOST || "localhost",
  port: process.env.AUCTION_DB_PORT || 3306,
  username: process.env.AUCTION_DB_USER || "root",
  password: process.env.AUCTION_DB_PASSWORD || "root",
  database: process.env.AUCTION_DB_NAME || "spm_db",
  entities: ["dist/**/*.entity.js"],
  synchronize: true,
  logging: false,
  namingStrategy: new TypeOrmNamingStrategy()
};
