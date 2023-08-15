const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class VideoGame extends Model {}

VideoGame.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    genre_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "genre",
        key: "id",
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 50,
      validate: {
        isNumeric: true,
      },
    },
    release_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    developers: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    boxart_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    console_ps5: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    console_xbox: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    console_pc: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "videogame",
  }
);

module.exports = VideoGame;
