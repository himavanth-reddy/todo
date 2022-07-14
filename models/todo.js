const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const toDo = sequelize.define("toDo", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    taskName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      default: false,
      allowNull: false,
    },
  });
  return toDo;
};
