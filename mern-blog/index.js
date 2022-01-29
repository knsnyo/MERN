const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(
    "?!"
  )
  .then(() => console.log("MongoDB connect"));

app.get("/", (req, res) => {
  res.send("Root");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server ${port}`);
});
