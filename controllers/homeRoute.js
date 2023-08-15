const router = require("express").Router();
const authenticate = require("../utils/authenticate");
const { VideoGame, Genre } = require("../models/");
const fs = require("fs");
const svgLogo = fs.readFileSync("./public/assets/logo.svg", "utf-8");

router.get("/", async (req, res) => {
  try {
    const videoGameData = await VideoGame.findAll({
      include: [{ model: Genre, attributes: ["genre_name"] }],
    });
    const videoGames = videoGameData.map((videoGame) =>
      videoGame.get({ plain: true })
    );

    res.render("videoGames", {
      videoGames,
      logged_in: req.session.logged_in,
      svgLogo,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login", {
    svgLogo,
  });
});

router.get("*", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  } else {
    res.redirect("/login");
    return;
  }
});

module.exports = router;
