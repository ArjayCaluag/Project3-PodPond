const router = require("express").Router();
const path = require("path");
const pondController = require("../controller/pondController");



// bottom-most, default route. If no other routes are hit --> send React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;