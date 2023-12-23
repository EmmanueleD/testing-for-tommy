const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/useRoutes");

app.get("/", (req, res) => {
  res.send("Este es el backend");
});

app.use(cors());
app.use(express.json());
app.use("/", routes);

const serverlessHandler = app;

module.exports = serverlessHandler;
