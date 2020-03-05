const Values = require('../models/values-model.js');

module.exports = (req, res, next) => {
    const { id } = req.params;

    Values.findById(id)
        .then(value => {
            if (value) {
                req.value = value;
                next();
            } else {
                res.status(404).json({ message: 'Cannot find value' });
            };
        });
};