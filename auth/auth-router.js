const express = require("express");
const bcrypt = require("bcryptjs");
const generateToken = require('../middleware/generate-token.js');

const Users = require('../models/users-model.js');

const router = express.Router();

// ✅ register (add) a new user
router.post('/register', (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            const token = generateToken(saved);
            res.status(201).json({ saved, token });
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to register user',name, code, message, stack });
        });
});

// ✅ login a user
router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);

                res.status(200).json({user, token});
            } else {
                res.status(401).json({ message: 'Invalid Credentials Provided' });
            };
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to login user',name, code, message, stack });
        });
});

module.exports = router;