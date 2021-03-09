const db = require("../models");

// Methods for routes.js

// Methods to export
module.exports = {
  register: function (req, res) {
    console.log("Registering User:", req.body.username);
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  saveNewPodcast: function(req,res){
    db.Podcast
    .create(req.body)
    .then (dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  },

  //Showcase Saved podcast
  savedPodcast: function (req,res) {
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
  },

  newComment: function (req,res){
    db.Comment
      .create(req.body)
      .then (dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  showComments : function (req,res){
    db.Comment
    .findAll()
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};