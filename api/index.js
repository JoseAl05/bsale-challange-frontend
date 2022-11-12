const express = require("express");
const path = require("path");
const port = process.env.PORT || 4000;
const app = express();

app.use("/dist", express.static(path.join(__dirname, "..", "public", "dist")));
app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "..", "public") });
});

app.listen(port);

module.exports = app;
