const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../dbConfig');

const router = express.Router();

router.post('register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await db.oneOrNone
    } catch (error) {
        res.status(409).send('Error during registration')
    }
})