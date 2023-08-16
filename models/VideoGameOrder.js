const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class VideoGameOrder extends Model {}

VideoGameOrder.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    videogame_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "videogame",
        key: "id",
      },
    },
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "order",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "videogameorder",
  }
);

module.exports = VideoGameOrder;
