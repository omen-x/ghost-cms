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

schema.pre('save', function pre(next): void {
  if (!this.isModified()) return next();

  bcrypt.genSalt(10, (err, salt): void => {
    if (err) next(err);

    bcrypt.hash(this.get('password'), salt, (errHash, hash): void => {
      if (errHash) return next(errHash);

      this.set('password', hash);
      next();
    });
  });
});


export const User = mongoose.model('User', schema);
