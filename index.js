require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = new express();
mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);
