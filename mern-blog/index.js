const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://isc963:xx9632@boilerplate.a2v6j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB connect"));

app.get("/", (req, res) => {
  res.send("Root");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server ${port}`);
});
