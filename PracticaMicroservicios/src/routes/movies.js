const { Router } = require("express");
const router = Router();

const movies = require("../sample.json");

router.get("/", (req, res) => {
  res.json(movies);
});

router.post("/", (req, res) => {
  const { title, year } = req.body;
  if (title && year) {
    const id = movies.length + 1;
    const newmovie = {...req.body, id};
    movies.push(newmovie);
    res.json(movies);
  } else {
    res.send("Error");
  }
});

module.exports = router;
