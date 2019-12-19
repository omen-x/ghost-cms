import passport from 'passport';
import local from 'passport-local';
import bcrypt from 'bcrypt';
import { User } from '../features/User/model';


const LocalStrategy = local.Strategy;

passport.serializeUser((user: User, done): void => {
  done(null, user.email);
});

passport.deserializeUser((email, done): void => {
  User.findOne({ email }, done);
});

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
  },
  (email, password, done): void => {
    User.findOne({ email }, (err, user): void => {
      if (err) return done(err);
      if (!user) return done(null, false);

      bcrypt.compare(password, user.get('password'), (passErr, isValid): void => {
        if (passErr) return done(err);
        if (!isValid) return done(null, false);

        return done(null, user);
      });
    });
  },
));
