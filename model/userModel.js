const db = require('dbConfig');
const bcrypt = require('bcrypt');

const createUser = async ({ email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return db.one('INSERT INTO users (email password) VALUES ($1, $2) RETURNING *', [email, hashedPassword])
};

const findUserByEmail = async (email) => {
    return db.oneOrNone('SELECT * FROM users WHERE email = $1', [email]);
};


module.exports = {
    createUser,
    findUserByEmail
}