const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

// tells express to use cookies max age of 30 days
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// imports the authRoutes function and is
// immediately invoked with the app object
require("./routes/authRoutes")(app);

// use port server provides or use 5000 in a dev env
const PORT = process.env.PORT || 5000;
app.listen(PORT);
