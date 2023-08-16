const { Model, DataTypes } = require("sequelize");

const bcrypt = require("bcrypt");

const sequelize = require("../config/connection");

class Order extends Model {};

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    total_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    shipping_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    card_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (cardNumberData) => {
        cardNumberData.card_number = await bcrypt.hash(
          cardNumberData.card_number,
          10
        );
        return cardNumberData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: `order`,
  }
);

module.exports = Order;
