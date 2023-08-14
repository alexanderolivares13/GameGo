const router = require("express").Router();
const { VideoGame, Genre } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const videoGameData = await VideoGame.findAll({
      include: [{ model: Genre, attributes: ["genre_name"] }],
    });
    res.status(200).json(videoGameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const videoGameData = await VideoGame.findByPk({
      include: [{ model: Genre, attributes: ["genre_name"] }],
    });
    res.status(200).json(videoGameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // insert/update video game data with the api, the req.body should be in the following format:
  /*
  {
    title: "God of War Ragnarok",
    price: 49.99,
    genre_id: 1,
    stock: 50,
    release_date: "Nov. 9, 2022",
    developers: "SIE Santa Monica Studio",
    boxart_url:
      "https://cdn.mobygames.com/66bb26ec-ac16-11ed-9271-02420a000133.webp",
    console_ps5: true,
    console_xbox: false,
    console_pc: true,
  }
  */
  try {
    const videoGameData = await VideoGame.create(req.body);
    res.status(200).json({
      data: videoGameData,
      message: "Video game created successfully!",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const videoGameData = await VideoGame.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      data: videoGameData,
      message: "Video game updated successfully!",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const videoGameData = await VideoGame.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      data: videoGameData,
      message: "Video game deleted successfully!",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
