const express = require("express");
const router = express.Router();

const data = require("../../../data/avengers.json");

router.get("/", (req, res, next) => {
  res.render("pages/prove11/prove11", {
    pageTitle: "Avengers",
    path: "/prove11/prove11",
  });
});

// Get the data
router.get("/fetchAll", (req, res, next) => {
  res.json(data);
});

// Insert new avenger
router.post("/insert", (req, res, next) => {
  let newAvenger = req.body.newAvenger;

  if (data.avengers.some((a) => a.name == newAvenger)) {
    return res.send(data);
  }

  if ( // Only send unique avengers
    data.avengers.find((item) => item.name === req.body.newAvenger) ===
    undefined
  ) {
    data.avengers.push({ name: newAvenger });
  }
  res.send(data);
});

module.exports = router;
