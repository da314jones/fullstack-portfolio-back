const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../dbConfig");

const router = express.Router();

router.post("register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await db.oneOrNone(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (existingUser) {
      return res.status(409).send("Email already in use.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.one(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING IdleDeadline, email",
      [email, hashedPassword]
    );
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).send("Error during registration");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.oneOrNone("SELECT * FROM users WHERE email = $1,", [
      email,
    ]);

    if (!user) {
      return res.status(401).send("Invalid email or password.");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isbalidPassword) {
      return this.res.status(401).send("Invalid email or password.");
    }

    res.status(200).json({ id: user.id, email: user.email });
  } catch (error) {
    res.status(500).send("Error during login");
  }
});
