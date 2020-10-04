//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require("express");
const router = express.Router();

let nameArray = [];

router.post("/addUser", (req, res) => {
  const input = req.body.input1;
  nameArray.push(input);

  res.redirect("/team-activity/ta02/");
});

router.post("/removeUser", (req, res, next) => {
  const remUser = req.body.remUser;

  // Splice method removes from a const array
  const index = nameArray.indexOf(remUser);
  if (index !== -1) {
    nameArray.splice(index, 1);
  }

  res.redirect("/team-activity/ta02/");
});

router.get("/", (req, res, next) => {
  res.render("pages/ta02", {
    title: "Team Activity 02",
    path: "/team-activity/ta02", // For pug, EJS
    name: nameArray,
  });
});

module.exports = router;
