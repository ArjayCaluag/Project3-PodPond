const router = require("express").Router();
const path = require("path");
const pondController = require("../controller/pondController");
const passport = require("../config/passport");

// Calls methods from pondController

router.post("/api/login", passport.authenticate("local"), function (req, res) {
    // console.log("req.user in routes:", req.user);
    res.json(req.user);
});

router.post("/api/signup", function (req, res) {
    pondController.register(req, res);
});

// GET route for logout function
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

// saved podcast routes
router.route("/api/savedpodcasts")
    .get(pondController.savedPodcasts)
    .post(pondController.saveNewPodcast)

// delete from saved podcast
router.route("/api/podcasts/:id")
    .delete(pondController.removePodcast)

// routes for comments
router.route("/api/podcasts/comments")
    .post(pondController.newComment)
    
router.route("/api/podcasts/comments/:id")
    .get(pondController.showComments)

// bottom-most, default route. If no other routes are hit --> send React app
// router.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;