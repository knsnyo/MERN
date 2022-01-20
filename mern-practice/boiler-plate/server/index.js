/* 서버 설정을 위해서 */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

/* cookie-parser*/
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

// axios test
app.get("/api/hello", (req, res) => {
  res.send("안녕하세염");
});

/* 서버 열겠습니다. */
const port = 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
