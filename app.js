const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("<h4>WELCOME TO MAHAMUNI JYOTISH</h4>");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
