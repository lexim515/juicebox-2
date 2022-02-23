const express = require("express");
const { getAllPosts } = require("../db");
const postsRouter = express.Router();

postsRouter.use("/", (req, res, next) => {
  console.log("Sending request to posts!");
  next();
});

postsRouter.get("/", async (req, res, next) => {
  const posts = await getAllPosts();
  res.send({
    posts,
  });
});

module.exports = postsRouter;
