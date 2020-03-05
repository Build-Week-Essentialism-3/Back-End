// ✅✅✅ All routes tested in postman and working
const router = require('express').Router();

const findPrompt = require('../middleware/find-prompt.js');

const Prompt = require('../models/prompt-model.js');

// GET INFORMATION
// ✅ get prompt by id
router.get('/:id', findPrompt, (req, res) => {
    Prompt.findById(req.prompt.id)
        .then(prompt => {
            res.status(200).json(prompt);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve Prompt', error: err });
        });
});

// ADD INFORMATION
// ✅ add a prompt
router.post('/', (req, res) => {
    const addPrompt = req.body;

    Prompt.add(addPrompt)
        .then(added => {
            res.status(201).json(added);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add Prompt', error: err });
        });
});

// UPDATE INFORMATION
// ✅ update a prompt
router.put('/:id', findPrompt, (req, res) => {
    const promptChange = req.body;

    Prompt.update(req.prompt.id, promptChange)
        .then(updatedPrompt => {
            res.status(200).json(updatedPrompt);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to update Prompt', error: err });
        });
});

// DELETE INFORMATION
// ✅ delete a prompt
router.delete('/:id', findPrompt, (req, res) => {
    Prompt.remove(req.prompt.id)
        .then(removed => {
            res.status(200).json(removed);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to delete Prompt', error: err });
        });
});

module.exports = router;