const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  const data = {
    "nombre": "Diego",
    "github": "https://github.com/Narbok"
  };
  res.json(data);
});

module.exports = router;
