const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db/dbConfig");
require("dotenv").config();

const usersRouter = express.Router();
const { getUserByEmail, createUser } = require("../queries/users");
const {} = require("../validations/checkEntries");

//create
usersRouter.post("/register", async (req, res) => {
  try {
    const { email, password, serviceBranch, yearsOfService } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser({
      email,
      hashedPassword,
      serviceBranch,
      yearsOfService,
    });
    console.log({ message: "User successfully created", user: newUser });
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating user" });
  }
});

//login endpoint
usersRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials." });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "invalid credentials" });
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log({ message: "Login successful!" });
    res.status(200).json({
      message: "Login successful.",
      token,
      user: {
        id: user.id,
        email: user.email,
        serviceBranch: user.service_branch,
        yearsOfService: user.years_of_service,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error login in." });
  }
});
