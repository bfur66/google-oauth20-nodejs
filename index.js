const express = require("express");
const app = express();

// route handler for "/"
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// use port heroku provides or use 5000 in a dev env 
const PORT = process.env.PORT || 5000;

app.listen(5000);
