const express = require('express');
const path = require('path');
const port = process.env.PORT || 4000;
const app = express();


app.use("/src", express.static(path.join(__dirname,"src")));
app.use("/public", express.static(path.join(__dirname,"public")));
app.use("/dist",express.static(path.join(__dirname,"dist")));
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);