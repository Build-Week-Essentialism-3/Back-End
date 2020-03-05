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
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve User Account Information', error: err });
        });
});

// ✅ get user information
router.get('/:id/user-info', findUser, (req, res) => {
    Users.findUser(req.user.id)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve User Information', error: err });
        });
});

// ✅ get user values
router.get('/:id/values', findUser, (req, res) => {
    Values.findByUser(req.user.id)
        .then(values => {
            res.status(200).json(values);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve User Values', error: err });
        });
});

// ✅ get one user value
router.get('/:id/values/:user_value_id', findUser, (req, res) => {
    const { user_value_id } = req.params;

    Values.findSpecific(user_value_id)
        .then(value => {
            res.status(200).json(value);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve specific User Value', error: err });
        });
});

// ✅ get user top values
router.get('/:id/top-values', findUser, (req, res) => {
    Values.findTop(req.user.id)
        .then(values => {
            res.status(200).json(values);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve User Top Values', error: err });
        });
});

// ✅ get user prompt(s)
router.get('/:id/prompt', findUser, (req, res) => {
    Prompt.findByUser(req.user.id)
        .then(prompt => {
            res.status(200).json(prompt);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve User Prompt(s)', error: err });
        });
});

// ✅ get user projects
router.get('/:id/projects', findUser, (req, res) => {
    Projects.findByUser(req.user.id)
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve User Projects', error: err });
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
        .catch(err => {
            res.status(500).json({ message: 'Failed to add User Information', error: err });
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
        .catch(er => {
            res.status(500).json({ message: 'Failed to update User', error: err });
        });
});

// ✅ update user information
router.put('/:id/user-info', findUser, (req, res) => {
    const infoChange = req.body;

    Users.updateInfo(req.user.id, infoChange)
        .then(updatedInfo => {
            res.status(200).json(updatedInfo);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to update User Information', error: err });
        });
});

// DELETE INFORMATION
// ✅ delete user login information
router.delete('/:id', findUser, (req, res) => {
    Users.remove(req.user.id)
        .then(removed => {
            res.status(200).json(removed);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to remove User', error: err });
        });
});

module.exports = router