const db = require("../models");

// Methods to export
module.exports = {
  create: function (req, res) {
    // console.log something here for test
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}