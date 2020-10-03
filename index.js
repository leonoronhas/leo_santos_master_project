// Our initial setup (package requires, port number setup)
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 5000; // So we can run on heroku || (OR) localhost:5000

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Route setup. You can implement more in the future!
const ta01Routes = require("./routes/ta01");
const ta02Routes = require("./routes/ta02");
const ta03Routes = require("./routes/ta03");
const ta04Routes = require("./routes/ta04");

// Route setup for weekly prove assignments
const prove01Routes = require("./routes/prove01/prove01");
const prove02Data = require("./routes/prove02/prove02Input");
const prove02 = require('./routes/prove02/prove02');

app
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .use("/ta01", ta01Routes)
  .use("/ta02", ta02Routes)
  .use("/ta03", ta03Routes)
  .use("/ta04", ta04Routes)
  .use("/prove01", prove01Routes)
  .use("/prove02Input", prove02Data.routes)
  .use("/prove02", prove02)
  .get("/", (req, res, next) => {
    // This is the primary index, always handled last.
    res.render("pages/index", {
      title: "Welcome to my CSE341 repo",
      path: "/",
    });
  })
  .use((req, res, next) => {
    // 404 page
    res.status(404).render("pages/404", { title: "404 - Page Not Found", path: req.url });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
