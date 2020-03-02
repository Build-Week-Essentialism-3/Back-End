const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secrets.js');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if (authorization) {
        jwt.verify(authorization, jwtSecret, (err, decodedToken) => {
            console.log(decodedToken);
            if (err) {
                res.status(401).json({ message: 'Invalid Credentials Provided' });
            } else {
                req.decodedToken = decodedToken;
                next();
            };
        });
    } else {
        res.status(400).json({ message: 'Credentials required to access this content' });
    };
};

/*
module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    const { id } = req.params;
    const { user_id } = req.params;

    if (authorization) {
        jwt.verify(authorization, jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: 'Invalid Credentials Provided' });
            } else if (!id && !user_id) {
                req.decodedToken = decodedToken;
                next();
            } else {
                let decodedId = decodedToken.subject
                if (id === decodedId || user_id === decodedId) {
                    req.decodedToken = decodedToken;
                    next();
                } else {
                    res.status(400).json({ message: 'You can only view your own information' })
                }
            };
        });
    } else {
        res.status(400).json({ message: 'Credentials required to access this content' });
    };
};
*/