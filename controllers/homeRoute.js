const router = require("express").Router();
const authenticate = require("../utils/authenticate");

router.get("/", authenticate, async (req, res) => {
  try {
    res.render("videoGame", {
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

module.exports = router;
