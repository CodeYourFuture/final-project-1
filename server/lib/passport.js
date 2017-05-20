// load all the things we need
import LocalStrategy from 'passport-local';
import Schema from './organisationSchema';


module.exports = (passport) => {
  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

  // used to serialize the user for the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser((id, done) => {
    Schema.User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  // passport.use('local-login', new LocalStrategy(
  //   function (username, password, done) {
  //     User.findOne({ username: username }, function (err, user) {
  //       if (err) { return done('Angela'); }
  //       if (!user) {
  //         return done(null, false, { message: 'Incorrect username.' });
  //       }
  //       if (!user.validPassword(password)) {
  //         return done(null, false, { message: 'Incorrect password.' });
  //       }
  //       return done(null, user);
  //     });
  //   }
  // )
  // )
  // =========================================================================
  // LOCAL SIGNUP ============================================================
  // =========================================================================
  passport.use('local-signup', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField: 'email',
    passwordField: 'Password',
    passReqToCallback: true,
  },
    (req, email, Password, done) => {
      if (email) {
        email = email.toLowerCase();
      }

      // asynchronous
      process.nextTick(() => {
        // if the user is not already logged in:
        if (!req.user) {
          Schema.User.findOne({ Email: email }, (err, user) => {
            // if there are any errors, return the error
            if (err) {
              return done(err);
            }
            // check to see if theres already a user with that email
            if (user) {
              return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            }
            // create the user
            const newUser = new Schema.User();
            newUser.Email = email; // pull the first email
            newUser.password = Password;
            newUser.save((errs) => {
              if (errs) {
                return done(err);
              }
              return done(null, newUser);
            });
            return done(null, newUser);
          });
        }
      });
    }));
};
