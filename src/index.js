const express = require("express");

const serverConfig = require("./config/server.config");

const apiRouter = require("./routes/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  return res.status(200).json({ message: "Server is Alive" });
});

app.listen(serverConfig.port, () => {
  console.log(`Server is running on port ${serverConfig.port}`);
});
