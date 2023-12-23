const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/useRoutes");

app.get("/", (req, res) => {
  res.send("Este es el backend");
});

app.use(cors());
app.use(express.json());
app.use("/api", routes);

module.exports = app; // Export your app instead of listening to a port
