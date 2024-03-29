const { DataTypes } = require("sequelize");
const todoSequelize = require("../setup/database");

// Define the Todo model
const TodoModel = todoSequelize.define(
  "Todo",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { tableName: "Todos" }
);

module.exports = TodoModel;