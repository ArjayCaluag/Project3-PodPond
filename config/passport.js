var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
const passportLocalMongoose = require('passport-local-mongoose'); 

var db = require("../models");
// import User model, reference as db.User

// Exporting our configured passport
module.exports = passport;

// https://medium.com/@brendt_bly/simple-mern-passport-app-tutorial-4aec2105e367