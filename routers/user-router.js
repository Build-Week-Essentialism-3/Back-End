// ✅✅✅ All routes tested in postman and working
const router = require('express').Router();
const bcrypt = require('bcryptjs');

const findUser = require('../middleware/find-user.js');

const Users = require('../models/users-model.js');
const Values = require('../models/values-model.js');
const Prompt = require('../models/prompt-model.js');
const Projects = require('../models/projects-model.js');

// GET INFORMATION
// ✅ get login information for user
router.get('/:id/user', findUser, (req, res) => {
    Users.findById(req.user.id)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to retrieve User Account Information', name, code, message, stack });
        });
});

// ✅ get user information
router.get('/:id/user-info', findUser, (req, res) => {
    Users.findUser(req.user.id)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to retrieve User Information', name, code, message, stack });
        });
});

// ✅ get user values
router.get('/:id/values', findUser, (req, res) => {
    Values.findByUser(req.user.id)
        .then(values => {
            res.status(200).json(values);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to retrieve User Values', name, code, message, stack });
        });
});

// ✅ get one user value
router.get('/:id/values/:user_value_id', findUser, (req, res) => {
    const { user_value_id } = req.params

    Values.findSpecific(user_value_id)
        .then(value => {
            res.status(200).json(value);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to retrieve specific User Value', name, code, message, stack });
        });
});

// ✅ get user top values
router.get('/:id/top-values', findUser, (req, res) => {
    Values.findTop(req.user.id)
        .then(values => {
            res.status(200).json(values);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to retrieve User Top Values', name, code, message, stack });
        });
});

// ✅ get user prompt(s)
router.get('/:id/prompt', findUser, (req, res) => {
    Prompt.findByUser(req.user.id)
        .then(prompt => {
            res.status(200).json(prompt);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to retrieve User Prompt(s)', name, code, message, stack });
        });
});

// ✅ get user projects
router.get('/:id/projects', findUser, (req, res) => {
    Projects.findByUser(req.user.id)
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to retrieve User Projects', name, code, message, stack });
        });
});


// ADD INFORMATION
// ✅ add user information
router.post('/:id/user-info', findUser, (req, res) => {
    const infoAdd = req.body;

    Users.addInfo(infoAdd)
        .then(addedInfo => {
            res.status(200).json(addedInfo);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to add User Information', name, code, message, stack });
        });
});

// UPDATE INFORMATION
// ✅ update user login information
router.put('/:id/user', findUser, (req, res) => {
    let userChange = req.body;
    
    const hash = bcrypt.hashSync(userChange.password, 10);
    userChange.password = hash;


    Users.update(req.user.id, userChange)
        .then(updatedUser => {
            res.status(200).json(updatedUser);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to update User', name, code, message, stack });
        });
});

// ✅ update user information
router.put('/:id/user-info', findUser, (req, res) => {
    const infoChange = req.body;

    Users.updateInfo(req.user.id, infoChange)
        .then(updatedInfo => {
            res.status(200).json(updatedInfo);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to update User Information', name, code, message, stack });
        });
});

// DELETE INFORMATION
// ✅ delete user login information
router.delete('/:id', findUser, (req, res) => {
    Users.remove(req.user.id)
        .then(removed => {
            res.status(200).json(removed);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to remove User', name, code, message, stack });
        });
});


module.exports = router