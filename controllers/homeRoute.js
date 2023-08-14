const router = require("express").Router();
const authenticate = require("../utils/authenticate");
const { VideoGame, Genre } = require("../models/");

router.get("/", authenticate, async (req, res) => {
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

  res.render("login");
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
