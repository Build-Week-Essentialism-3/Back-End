// ✅✅✅ All routes tested in postman and working
const router = require('express').Router();

const findValue = require('../middleware/find-value.js');
const findUser = require('../middleware/find-user.js');

const Values = require('../models/values-model.js');

// GET INFORMATION
// ✅ get all values
router.get('/', (req, res) => {
    Values.find()
        .then(values => {
            res.status(200).json(values);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to retrieve Values', name, code, message, stack });
        });
});

// ✅ get a value by id
router.get('/:id', findValue, (req, res) => {
    Values.findById(req.value.id)
        .then(value => {
            res.status(200).json(value);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to retrieve Value', name, code, message, stack });
        });
});

// ADD INFORMATION
// ✅ add a value
router.post('/', (req, res) => {
    const addValue = req.body;

    Values.add(addValue)
        .then(added => {
            res.status(200).json(added);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to add Value', name, code, message, stack });
        });
});

// ✅ add a user value
router.post('/user/:user_id', findUser, (req, res) => {
    const addValue = req.body;

    Values.addUser(addValue)
        .then(added => {
            res.status(200).json(added);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to add User Value', name, code, message, stack });
        });
});

// ✅ add a user top value
router.post('/user/:user_id/top-values', findUser, (req, res) => {
    const addValue = req.body;

    Values.findTop(req.user.id)
        .then(values => {
            console.log(values.length);
            if (values.length <= 3) {
                Values.addTop(addValue)
                    .then(added => {
                        res.status(200).json(added);
                    })
                    .catch(({ name, code, message, stack }) => {
                        res.status(500).json({ error: 'Failed to add Top Value', name, code, message, stack });
                    });
            } else {
                res.json({ message: 'Only 3 Top Values allowed' })
            }
        })
});

// UPDATE INFORMATION
// ✅ update a value
router.put('/:id', findValue, (req, res) => {
    const valueChanges = req.body;

    Values.update(req.value.id, valueChanges)
        .then(updatedValue => {
            res.status(200).json(updatedValue);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to update Value', name, code, message, stack });
        });
});

// REMOVE INFORMATION
// ✅ delete a value
router.delete('/:id', findValue, (req, res) => {
    Values.remove(req.value.id)
        .then(removed => {
            res.status(200).json(removed);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to remove Value', name, code, message, stack });
        });
});

// ✅ delete a user value
router.delete('/user/:user_id/:user_value_id', findUser, (req, res) => {
    const { user_value_id } = req.params;

    Values.removeUser(user_value_id)
        .then(removed => {
            res.status(200).json(removed);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to remove User Value', name, code, message, stack });
        });
});

// ✅ delete a users top value
router.delete('/user/:user_id/top-values/:top_id', findUser, (req, res) => {
    const { top_id } = req.params;

    Values.removeTop(req.user.id, top_id)
        .then(removed => {
            res.status(200).json(removed);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to remove Top Value', name, code, message, stack });
        });
});

module.exports = router;