const express = require("express");
const { StatusCodes } = require("http-status-codes");

const serverConfig = require("./config/server.config");
const errorHandler = require("./utils/errorHandler");

const apiRouter = require("./routes/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  return res.status(StatusCodes.OK).json({ message: "Server is Alive" });
});

// last middlewere
app.use(errorHandler);

app.listen(serverConfig.port, () => {
  console.log(`Server is running on port ${serverConfig.port}`);
});
