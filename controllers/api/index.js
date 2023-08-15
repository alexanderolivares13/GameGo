const router = require("express").Router();
const userRoutes = require("./user-routes");
const videoGameRoutes = require("./videoGame-routes");
const genreRoutes = require("./genre-routes");

router.use("/genre", genreRoutes);
router.use("/videogames", videoGameRoutes);
router.use("/users", userRoutes);

module.exports = router;
