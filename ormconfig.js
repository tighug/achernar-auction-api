const TypeOrmNamingStrategy = require("./config/TypeOrmNamingStrategy.js");

module.exports = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "spm_db",
  entities: ["dist/**/*.entity.js"],
  synchronize: false,
  namingStrategy: new TypeOrmNamingStrategy()
};
