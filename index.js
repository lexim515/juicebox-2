const PORT = 3000;
const express = require("express");
const server = express();
const apiRouter = require("./api");
const morgan = require("morgan");
const { client } = require("./db");
client.connect();

server.use("/api", apiRouter);
server.use(express.json());
server.use(morgan("dev"));

server.use((req, res, next) => {
  console.log("<____ Body Logger START ____>");
  console.log(req.body);
  console.log("<____ Body Logger END ____>");
  next();
});

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});