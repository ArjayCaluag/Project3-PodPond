const db = require("../models");
const { findOne } = require("../models/user");

// Methods for use in routes.js

// Methods to export
module.exports = {
  register: function (req, res) {
    console.log("Registering User:", req.body.username);
    db.User
      .create(req.body)
      // .then(function (data) {
      //   res.redirect(307, "/api/login");
      // })
      // .catch(function (err) {
      //   console.log(err);
      //   res.status(401).json(err);
      // });

      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  saveNewPodcast: function (req, res) {
    db.Podcast.findOne({ spotifyID: req.body.spotifyID })
      .then(result => {
        if (result) {
          db.User.findOneAndUpdate({ username: req.user.username }, { $push: { saved: result._id } }, { new: true })
            .then(dbModel => {
              res.json(dbModel);
            })
            .catch(err => {
              res.json(err);
            });
        } else {
          db.Podcast.create(req.body)
            .then(({ _id }) => db.User.findOneAndUpdate({ username: req.user.username }, { $push: { saved: _id } }, { new: true }))
            .then(dbModel => {
              res.json(dbModel);
            })
            .catch(err => {
              res.json(err);
            });
        }
      });
  },

  //Showcase Saved podcast
  savedPodcasts: function (req, res) {
    db.User.findOne({ username: req.user.username })
      .populate("saved")
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  },
  // Find podcast by Id
  findById: function (req, res) {
    db.Podcast
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  // Remove from favorites
  remove: function (req, res) {
    db.Podcast
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  newComment: function (req, res) {
    db.Comment
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  showComments: function (req, res) {
    db.Comment
      .findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};