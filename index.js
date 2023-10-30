const express = require("express");

const path = require("path");

const app = express();

app.use("/cdn/1", express.static("cdn/1"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log("Service Start and listen to port:", port);
});
