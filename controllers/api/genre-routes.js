const router = require("express").Router();
const { Genre } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const genreData = await Genre.findAll();
    res.status(200).json(genreData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  /* the req.body should only contain the denre_name
    {
        genre_name: ''
    }
    */
  try {
    if (!req.body.genre_name) {
      res
        .status(400)
        .json({ message: "Please include a genre name in the body" });
    }
    const genreData = await Genre.create(req.body);
    res
      .status(200)
      .json({ data: genreData, message: "Genre created successfully!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const genreData = await Genre.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res
      .status(200)
      .json({ data: genreData, message: "Genre updated successfully!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const genreData = await Genre.destroy({
      where: {
        id: req.params.id,
      },
    });
    res
      .status(200)
      .json({ data: genreData, message: "Genre deleted successfully!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
