const express = require("express");
const app = express();
let posts = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json(posts);
});

app.get("/post", () => {
  const { title, name, text } = req.body;

  posts.push({ id: posts.length + 1, title, name, text, createdDt: Date() });
  res.json({ title, name, text });
});

app.delete("/posts/:id", (req, res) => {
  const id = req.params.id;
  const filteredPosts = posts.filter((post) => post.id !== +id);
  const isLengthChanged = post.length !== filteredPosts.length;
  posts = filteredPosts;
  if (isLengthChanged) {
    res.json("OK");
    return;
  }
  res.json("Not Changed");
});

app.listen("3000", () => {
  console.log("Welcome posts START!");
});
