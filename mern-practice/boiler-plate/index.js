/* 서버 설정을 위해서 */
const express = require("express");
const app = express();
const port = 5000;

const config = require("./config/key");
/* MongoDB에 저장될 User Schema 가져오기 */
const { User } = require("./models/User")

/* body-parser */
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
	extended: true,
}))
app.use(bodyParser.json())

/* cookie-parser*/
const cookieParser = require("cookie-parser");
app.use(cookieParser());

/* mongoDB연결 mongoose 사용 */
const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI)
  .then(() => {
    console.log("MongoDB Connection");
  })
  .catch((err) => {
    console.log(`${err}`);
  });

// 루트
app.get("/", (req, res) => {
  res.send("안녕");
});

// 회원가입
app.post('/register', (req, res) => {
	const user = new User(req.body)
	
	user.save((err, userInfo) => {
		if(err){
			return res.json({success: false, err})
		}
		return res.status(200).json({
			success: true,
		})
	})
})

// 로그인
app.post('/login', (req, res) => {
	// 데이터베이스에서 아이디 확인
	User.findOne({ email: req.body.email }, (err, userInfo) => {
		if(!userInfo){
			return res.json({
				loginSucces: false,
				message: "회원이 아니신가?",
			})
		}

		// 비밀번호 확인
		user.comparePassword(req.body.password, (err, isMatch) => {
			if(!isMatch){
				return res.json( {
					loginSucces: false,
					message: "비밀번호 틀리셨는데",
				})
			}

			// 합격 token 준다 ㅅㄱ
			user.generateToken((err, user) => {
				if(err) return res.status(400).send(err);
				
				// 토큰 저장.
				res.cookie("x_auth", user.token)
				.status(200)
				.json({
					loginSucces: true,
					userID: user._id,
				})
			})
		})
	})
})

/* 서버 열겠습니다. */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
