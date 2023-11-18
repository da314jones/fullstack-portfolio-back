const cors = require("cors");
const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser, findUserByEmail }= require('./userModel');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("My Portfolio App Sever is Running")
})

//register endpoint
app.post("/api/register", async (req, res) => {
    const { email, password } = eq.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required. "});
    }
    try {
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(409).json({ message: "User already exists."})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error Registering user."})
    }
});

//login endpoint
app.post("api/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }
    try {
        const user = await findUserByEmail(email);
        if (!user || !(await bcrypt.compare(password, user.password))) {

        }
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Error logging in." });
    }
});


app.get("*", (req, res) => {
    res.status(404).send("Page not found!")
})

module.exports = app