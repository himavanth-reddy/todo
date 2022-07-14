const { Sequelize } = require("sequelize");
const toDo = require("../models/todo");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

sequelize.toDo = require("../models/todo")(sequelize);
module.exports = sequelize;
