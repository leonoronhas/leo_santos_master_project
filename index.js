// Our initial setup (package requires, port number setup)
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require("path");
const cors = require('cors')
require("dotenv/config");
const PORT = process.env.PORT || 5000; // So we can run on heroku || (OR) localhost:5000

const routes = require("./routes");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "https://leo-cse341.herokuapp.com/",
  optionsSuccessStatus: 200
};

// app
//   .use(express.static(path.join(__dirname, "public")))
//   .set("views", path.join(__dirname, "views"))
//   .set("view engine", "ejs")
//   .use(cors(corsOptions))
//   .use("/", routes) // all my routes
//   .listen(PORT, () => console.log(`Listening on ${PORT}`));

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4
};

const MONGODB_URL = process.env.MONGODB_URL

mongoose
  .connect(
    MONGODB_URL, options
  )
  .then(result => {
    app
    .use(express.static(path.join(__dirname, "public")))
    .set("views", path.join(__dirname, "views"))
    .set("view engine", "ejs")
    .use(cors(corsOptions))
    .use("/", routes) // all my routes
    .listen(PORT, () => console.log(`Listening on ${PORT}`));
  })
  .catch(err => {
    console.log(err);
  });


