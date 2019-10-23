import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export interface User {
  email: string;
  name: string;
  password: string;
}

schema.pre('save', function (next) {
  const user = this;

  if (!user.isModified()) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) next(err);

    bcrypt.hash(user.get('password'), salt, (errHash, hash) => {
      if (errHash) return next(errHash);

      user.set('password', hash);
      next();
    });
  });
});


export const User = mongoose.model('User', schema);
