const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts")
const categoriesRoute = require("./routes/categories");
<<<<<<< HEAD
const path = require("path");
const multer = require("multer");
=======
>>>>>>> parent of 157cb51 (20220218 image upload)

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoriesRoute);

app.listen("5000", () => {
  console.log("backend is running");
});
