const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { User } = require("./models/User");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.connect("?!").then(() => console.log("MongoDB connect"));

app.get("/", (req, res) => {
  res.send("Root");
});

app.post("/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) {
      return res.json({ 
        registerSuccess: false 
      });
    } else {
      return res.status(200).json({
        registerSuccess: true,
      });
    }
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server ${port}`);
});
