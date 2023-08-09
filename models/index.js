const Genre = require("./Genre");
const User = require("./User");
const VideoGame = require("./VideoGame");

VideoGame.belongsTo(Genre, {
  foreignKey: "genre_id",
});

Genre.hasMany(VideoGame, {
  foreignKey: "genre_id",
  onDelete: "SET NULL",
});

module.exports = {
  Genre,
  User,
  VideoGame,
};
