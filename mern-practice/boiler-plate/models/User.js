const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, // 빈칸 제거
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

// 비밀번호 암호화 할게얌.
userSchema.pre("save", function (next) {
  let user = this;

	if (user.isModified('password')){
		bcrypt.genSalt(saltRounds, (err, salt) => {
			if (err) return next(err);
	
			bcrypt.hash(user.password, salt, (err, hash) => {
				if (err) return next(err);
	
				user.password = hash;
				next();
			});
		});
	}
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
