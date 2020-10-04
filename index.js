// Our initial setup (package requires, port number setup)
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 5000; // So we can run on heroku || (OR) localhost:5000

const routes = require("./routes");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .use("/", routes) // all my routes
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
