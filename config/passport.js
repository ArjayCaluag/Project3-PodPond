var passport = require("passport");
const passportLocalMongoose = require('passport-local-mongoose'); 

var db = require("../models");
// import User model, reference as db.User

passport.use(db.User.createStrategy());

passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

// Exporting our configured passport
module.exports = passport;