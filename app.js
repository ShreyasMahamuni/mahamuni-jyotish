const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { connectDB } = require("./confitg/db");

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
  const isConnect = await connectDB();
  if (!isConnect) {
    console.error("Fatal: Database connection failed. Exiting...");
    process.exit(1);
  } else {
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  }
}

startServer();
