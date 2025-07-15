const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

require("dotenv").config({
  path: ".env",
  encoding: "utf8",
  quiet: true,
});

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h4>WELCOME TO MAHAMUNI JYOTISH</h4>");
});

const PORT = process.env.PORT || 5000;

async function startServer() {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
}

startServer();
