console.log("Welcome to Compilo");
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const { connectDB } = require("./db/connect");
const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(notFound)
app.use(errorHandler)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(() => {
      console.log(`Server is listening to port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
};

start();

module.exports = app;
