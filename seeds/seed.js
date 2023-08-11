const seedGenres = require("./genre-seeds");
const seedVideoGame = require("./video-game-seeds");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedGenres();
  console.log("\n----- GENRES SEEDED -----\n");

  await seedVideoGame();
  console.log("\n----- VIDEO GAMES SEEDED -----\n");

  process.exit(0);
};

seedAll();
