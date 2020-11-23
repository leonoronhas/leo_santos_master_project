const express = require("express");
const router = express.Router();

const data = require("../../../data/avengers.json");

router.get("/", (req, res, next) => {
  res.render("pages/prove10/prove10", {
    pageTitle: "Avengers",
    path: "/prove10/prove10",
  });
});

router.get("/fetchAll", (req, res, next) => {
  res.json(data);
});

router.post("/insert", (req, res, next) => {
  let newAvenger = req.body.newAvenger;
  console.log(req.body)

  if (data.avengers.some((a) => a.name == newAvenger)) {
    return res.send(data);
  }
  data.avengers.push({ name: newAvenger });
  res.send(data);
});

module.exports = router;
