const Genre = require("./Genre");
const User = require("./User");
const VideoGame = require("./VideoGame");
const Order = require("./Order")
const VideoGameOrder = require("./VideoGameOrder");

VideoGame.belongsTo(Genre, {
  foreignKey: "genre_id",
});

VideoGame.hasOne(Genre, {
  foreignKey: "genre_id",
});

Genre.hasMany(VideoGame, {
  foreignKey: "genre_id",
  onDelete: "SET NULL",
});

Order.belongsToMany(VideoGame, {
  through: VideoGameOrder,
  foreignKey: "order_id",
});

VideoGame.belongsToMany(Order, {
  through: VideoGameOrder,
  foreignKey: "videogame_id",
});

Order.belongsTo(User, {
    foreignKey: "user_id"
});

User.hasMany(Order, {
    foreignKey: "user_id"
});


module.exports = {
  Genre,
  User,
  VideoGame,
  Order,
  VideoGameOrder,
};
