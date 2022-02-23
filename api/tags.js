const express = require("express");
const { getAllTags } = require("../db");
const tagsRouter = express.Router();

tagsRouter.use("/", (req, res, next) => {
  console.log("Tags request coming!");
  next();
});

tagsRouter.get("/", async (req, res, next) => {
  const tags = await getAllTags();
  res.send({
    tags,
  });
});

module.exports = tagsRouter;
