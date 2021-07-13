const express = require("express");
const app = express();

// eslint-disable-next-line no-unused-vars
app.get("/", (req, res) => {
  console.log("Api");
});

app.listen(8080, () => {
  console.log("server started");
});
