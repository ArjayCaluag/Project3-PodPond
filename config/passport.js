var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");
// import User model, reference as db.User

passport.use(new LocalStrategy(
    {
        usernameField: "username"
    },
    function (username, password, done) {
        db.User.findOne({ username }, (err, user) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: "Incorrect username" });
            }
            if (!user.checkPassword(password)) {
                return done(null, false, { message: "Incorrect password"});
            }
            return done(null, user);
        });
    }
));

passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

// Exporting our configured passport
module.exports = passport;

//https://medium.com/@brendt_bly/simple-mern-passport-app-tutorial-4aec2105e367