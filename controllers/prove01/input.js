exports.getInputData = (req, res) => {
  res.render("pages/prove01/prove01", {});
};

exports.postInputData = (req, res) => {
  res.render("pages/prove01/prove01display", {
    input1: req.body.input1,
    input2: req.body.input2,
  });
};
