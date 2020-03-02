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
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to retrieve Prompt', name, code, message, stack });
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
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to add Prompt', name, code, message, stack });
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
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to update Prompt', name, code, message, stack });
        });
});

// DELETE INFORMATION
// ✅ delete a prompt
router.delete('/:id', findPrompt, (req, res) => {
    Prompt.remove(req.prompt.id)
        .then(removed => {
            res.status(200).json(removed);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to delete Prompt', name, code, message, stack });
        });
});

module.exports = router;