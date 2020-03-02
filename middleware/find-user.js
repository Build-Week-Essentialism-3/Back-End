const Users = require('../models/users-model.js');

module.exports = (req, res, next) => {
    const { id } = req.params;
    const { user_id } = req.params;

    Users.findById(id || user_id)
        .then(user => {
            if (user) {
                req.user = user;
                next();
            } else {
                res.status(404).json({ message: 'Cannot find User' })
            }
        })
}