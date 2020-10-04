const ta = require("express").Router();

// Route setup. You can implement more in the future!
const ta01Routes = require("../teamActivity/ta01");
const ta02Routes = require("../teamActivity/ta02");
const ta03Routes = require("../teamActivity/ta03");
const ta04Routes = require("../teamActivity/ta04");

ta.use("/ta01", ta01Routes)
  .use("/ta02", ta02Routes)
  .use("/ta03", ta03Routes)
  .use("/ta04", ta04Routes);

module.exports = ta;
