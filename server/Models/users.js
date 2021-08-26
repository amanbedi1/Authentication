const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const saltRounds = 10;

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  email: {
    type: String,
    unique: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  token: {
    type: String,
  },

  tokenValidity: {
    type: Date,
  },
});

userSchema.pre("save", function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const users = mongoose.model("users", userSchema);

module.exports = users;
