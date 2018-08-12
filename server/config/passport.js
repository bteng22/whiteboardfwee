const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

module.exports = (passport) => {
  // used to serialize the user for the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser((id, done) => {
    User.findById(id, (error, user) => {
      done(error, user);
    });
  });

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      (req, email, password, done) => {
        console.log('+++PASSPORT', req.body);
        User.findOne({ "local.email": email }, (error, user) => {
          if (error) return done({ error });

          if (user) {
            return done({
              error: null,
              user: false,
              info: {
                signupMessage: "That email is already taken."
              }
            });
          } else {
            const newUser = new User();
            newUser.local.email = email;
            newUser.local.password = newUser.generateHash(password);
            newUser.local.firstName = req.body.firstName;
            newUser.local.lastName = req.body.lastName;

            newUser.save(error => {
              if (error) throw error;
              return done({ error: null, user: newUser });
            });
          }
        });
      }
    )
  );
};
