const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
		trim: true, // 빈칸 제거,
		unique: 1,
	},
	password: {
		type: String,
		minLength: 6,
	},
	role: {
		// 0 일반, 1 관리자
		type: Number,
		default: 0,
	},
	token: {
		type: String,
	},
})

const User = mongoose.model("User", userSchema);
module.exports = { User };