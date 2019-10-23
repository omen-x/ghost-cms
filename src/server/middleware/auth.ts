import passport from 'passport';
import local from 'passport-local';
import bcrypt from 'bcrypt';
import { User } from '../models/User';


const LocalStrategy = local.Strategy;

passport.serializeUser((user: User, done) => {
  done(null, user.email);
});

passport.deserializeUser((email, done) => {
  User.findOne({ email }, done);
});

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
  },
  (email, password, done) => {
    User.findOne({ email }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false);

      bcrypt.compare(password, user.get('password'), (passErr, isValid) => {
        if (passErr) return done(err);
        if (!isValid) return done(null, false);

        return done(null, user);
      });
    });
  },
));
