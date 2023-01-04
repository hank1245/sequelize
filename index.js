const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./models");
const { User } = require("./models");

app.get("/select", (req, res) => {
  User.findAll({ where: { firstName: "John" } })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/insert", (req, res) => {
  User.create({
    firstName: "John",
    age: 19,
  }).catch((err) => {
    console.log(err);
  });
  res.send("isnert");
});

app.get("/delete", (req, res) => {
  User.destroy({ where: { id: 10 } });
  res.send("delete");
});

db.sequelize.sync().then((req) => {
  app.listen(5000, () => {
    console.log("server running");
  });
});
