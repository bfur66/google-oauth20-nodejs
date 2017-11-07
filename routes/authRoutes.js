const passport = require("passport");

module.exports = app => {
  // route handler for login flow with google oauth
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // route handler for callback from google oauth login
  app.get("/auth/google/callback", passport.authenticate("google"));

  // route handler to test user authentication
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
