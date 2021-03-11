const express = require("express");
const session = require("express-session");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const passport = require("./config/passport");

const PORT = process.env.PORT || 3001;
const app = express();
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static assets served by Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Initializing session to keep track of user's login session
app.use(session({ secret: "podypondy", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/podpond", 
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
