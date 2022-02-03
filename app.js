const express = require("express");
const app = express();
const supertest = require("supertest");
const {
  models: { Actor, Movie, Role },
} = require("./db");

app.get("/", (req, res, next) => {
  try {
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

app.get("/api/movies", async (req, res, next) => {
  try {
    res.send(await Movie.findAll());
  } catch (error) {
    next(error);
  }
});

module.exports = app;
