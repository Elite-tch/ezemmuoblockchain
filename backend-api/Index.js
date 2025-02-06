require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("express-async-errors");

const router = require("./routes");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./db");
const app = express();

// static requests
app.set("view engine", "ejs", "HTML");

// Connect to the database
connectDB();

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cors());
app.use(bodyParser.json());

// Middleware for logging request details

//ROUTES
app.use(router);

//GET and POST requests

app.get("/", (req, res) => {
  res.redirect("/blogs");
});
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

// Middleware for handling errors
app.use(errorHandler);
//LISTENING FOR REQUESTS

app.listen(3000, () => {
  console.log("server running on port http://localhost:3000");
});
