require('dotenv').config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require('../auth/auth-router.js');
const userRouter = require('../routers/user-router.js');
const valueRouter = require('../routers/value-router.js');
const promptRouter = require('../routers/prompt-router.js');
const projectRouter = require('../routers/project-router.js');

const restricted = require('../middleware/restricted.js');

const server = express();

server.use(cors());
server.use(express.json());
server.use(helmet());

server.use('/api/auth', authRouter);
server.use('/api/users', restricted, userRouter);
server.use('/api/values', restricted, valueRouter);
server.use('/api/prompt', restricted, promptRouter);
server.use('/api/projects', restricted, projectRouter);

server.get('/', (req, res) => {
    res.json({ project: 'Essentialism 3' });
});

module.exports = server;