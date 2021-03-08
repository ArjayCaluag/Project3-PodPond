const db = require("../models");

// Methods to export
module.exports = {
  register: function (req, res) {
    console.log("Registering User:", req.body.username);
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Find podcast with search query
  findAllPodCast: function (req,res) {
    db.Podcast
      .find(req.query)
      .then(dbModel => res.json (dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Find podcast by Id
  findById: function (req,res){
    db.Podcast
    .findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  },
  // Remove from favorites
  remove : function (req,res){
    db.Podcast
    .findById({ _id: req.params.id})
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status (422).json(err));
  }
};