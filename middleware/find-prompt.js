const Prompt = require('../models/prompt-model.js');

module.exports = (req, res, next) => {
    const { id } = req.params;

    Prompt.findById(id)
        .then(prompt => {
            if (prompt) {
                req.prompt = prompt;
                next();
            } else {
                res.status(404).json({ message: 'Cannot find the prompt' })
            }
        })
}