const passport = require("passport");
const { Strategy } = require("passport-discord");
const config = require("./scopes")
const {
  clientID,
  clientSecret,
  callbackURL, 
	scope
} = config;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(
  new Strategy(
    {
      clientID,
      clientSecret,
      callbackURL: callbackURL + "/login",
      scope,
    },
    (a, r, profile, cb) => {
      process.nextTick(() => {
        return cb(null, profile);
      });
    }
  )
);

module.exports = passport;
