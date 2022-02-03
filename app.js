const express = require("express");
const app = express();
const supertest = require("supertest");

app.get("/", (req, res, next) => {
  try {
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = app;
