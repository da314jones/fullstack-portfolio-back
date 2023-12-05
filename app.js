const cors = require("cors");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const db = require("./db/dbConfig");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req,res) => {
    res.send("My Portfolio App Sever is Running")
})

const entriesController = require("./controllers/entriesController.js");
const activitiesController = require("./controllers/activitiesController.js")
const usersController = require("./controllers/usersControllers.js")


app.use("/entries", entriesController);
app.use("/activities", activitiesController);
app.use("/users", usersController);


// login Endpoint



app.get("*", (req, res) => {
    res.status(404).send("Page not found!")
})

module.exports = app