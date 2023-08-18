const router = require("express").Router();
const authenticate = require("../utils/authenticate");
const { VideoGame, Genre } = require("../models/");
const fs = require("fs");
const svgLogo = fs.readFileSync("./public/assets/logo.svg", "utf-8");

router.get("/action", authenticate, async (req, res) =>{
  try {
    const actionGameData = await VideoGame.findAll({
      where: { genre_id: 1 },
    });
    const actionGames = actionGameData.map((actionGame) =>
      actionGame.get({ plain: true })
    );

    res.render("actionGames", {
      actionGames,
      logged_in: req.session.logged_in,
      svgLogo,
    });
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/sports", authenticate, async (req, res) =>{
  try {
    const sportGameData = await VideoGame.findAll({
      where: { genre_id: 2 },
    });
    const sportGames = sportGameData.map((sportGame) =>
      sportGame.get({ plain: true })
    );

    res.render("sportGames", {
      sportGames,
      logged_in: req.session.logged_in,
      svgLogo,
    });
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/rpg", authenticate, async (req, res) =>{
  try {
    const rpgGameData = await VideoGame.findAll({
      where: { genre_id: 3 },
    });
    const rpgGames = rpgGameData.map((rpgGame) =>
      rpgGame.get({ plain: true })
    );

    res.render("rpgGames", {
      rpgGames,
      logged_in: req.session.logged_in,
      svgLogo,
    });
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/horror", authenticate, async (req, res) =>{
  try {
    const horrorGameData = await VideoGame.findAll({
      where: { genre_id: 4 },
    });
    const horrorGames = horrorGameData.map((horrorGame) =>
      horrorGame.get({ plain: true })
    );

    res.render("horrorGames", {
      horrorGames,
      logged_in: req.session.logged_in,
      svgLogo,
    });
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

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
      svgLogo,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/game/:id", authenticate, async (req, res) => {
  try {
    const videoGame = await VideoGame.findByPk(req.params.id, {
      include: [{ model: Genre, attributes: ["genre_name"] }],
    });
    const game = videoGame.get({ plain: true });

    res.render("specific-game", {
      game,
      logged_in: req.session.logged_in,
      svgLogo,
    });
  } catch (err) {
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
