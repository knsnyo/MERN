/* 서버 설정을 위해서 */
const express = require("express");
const app = express();
const port = 5000;

/* MongoDB에 저장될 User Schema 가져오기 */
const { User } = require("./models/User")

/* body-parser */
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
	extended: true,
}))
app.use(bodyParser.json())

/* mongoDB연결 mongoose 사용 */
const mongoose = require("mongoose");
const mongoStr = "mongodb+srv://isc963:xx9632@boilerplate.a2v6j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose
  .connect(mongoStr)
  .then(() => {
    console.log("MongoDB Connection");
  })
  .catch((err) => {
    console.log(`${err}`);
  });

// 루트
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 회원가입
app.post('/register', (req, res) => {
	const user = new User(req.body)
	
	user.save((err, doc) => {
		if(err){
			return res.json({success: false, err})
		}
		return res.status(200).json({
			success: true,
		})
	})
})

/* 서버 열겠습니다. */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
