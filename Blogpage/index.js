const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// GET - show page
app.get("/posts", (req, res) => {
  res.render("index.ejs");
});

// POST - form submit
app.post("/posts", (req, res) => {
  console.log(req.body);
  res.send("Post received ✅");
});

app.listen(port, () => {
  console.log(`server is running on Port ${port}`);
});
