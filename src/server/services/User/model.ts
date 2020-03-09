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

export interface UserModel extends User, mongoose.Document {
  getInfo: () => object;
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

/**
 * Returns an object with user information, excluding some fields
 * @returns {object}
 */
schema.methods.getInfo = function getInfo(): object {
  const user = this.toObject();
  const userInfo: { [index: string]: string | number } = {};

  Object.keys(user).forEach((key) => {
    if (key !== 'password') userInfo[key] = user[key];
  });

  return userInfo;
};


export const User = mongoose.model<UserModel>('User', schema);
