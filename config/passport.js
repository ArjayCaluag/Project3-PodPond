var passport = require("passport");

var db = require("../models");
// import User model, reference as db.User

passport.use(db.User.createStrategy());

passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

// Exporting our configured passport
module.exports = passport;