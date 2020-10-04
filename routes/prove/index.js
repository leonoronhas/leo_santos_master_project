const prove = require("express").Router();

// Route setup for weekly prove assignments
const prove01Routes = require("../../routes/prove/prove01/prove01");
const prove02Data = require("../../routes/prove/prove02/prove02Input");
const prove02 = require("../../routes/prove/prove02/prove02");

prove
  .use("/prove01", prove01Routes)
  .use("/prove02Input", prove02Data.routes)
  .use("/prove02", prove02);

module.exports = prove;
