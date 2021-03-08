const router = require("express").Router();
const path = require("path");
const pondController = require("../controller/pondController");
const passport = require("../config/passport");

// see guide https://www.sitepoint.com/local-authentication-using-passport-node-js/
// if you want to use connect-ensure-login package as middleware to ensure user is logged in. Can probably just use config/middleware/isAuthenticated.js instead like in project 2.

router.post("/api/login", passport.authenticate('local'), function (req, res) {
    res.json(req.user);
});

router.post("/api/signup", function (req, res) {
    pondController.register(req, res);
});

// GET route for logout function
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
    // will res.redirect work alongside React?
});

// bottom-most, default route. If no other routes are hit --> send React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;