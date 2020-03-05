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
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve Values', error: err });
        });
});

// ✅ get a value by id
router.get('/:id', findValue, (req, res) => {
    Values.findById(req.value.id)
        .then(value => {
            res.status(200).json(value);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve Value', error: err });
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
        .catch(err => {
            res.status(500).json({ message: 'Failed to add Value', error: err });
        });
});

// ✅ add a user value
router.post('/user/:user_id', findUser, (req, res) => {
    const addValue = req.body;

    Values.addUser(addValue)
        .then(added => {
            res.status(200).json(added);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add User Value', error: err });
        });
});

// ✅ add a user top value
router.post('/user/:user_id/top-values', findUser, (req, res) => {
    const addValue = req.body;

    Values.findTop(req.user.id)
        .then(values => {
            if (values.length <= 3) {
                Values.addTop(addValue)
                    .then(added => {
                        res.status(200).json(added);
                    })
                    .catch(err => {
                        res.status(500).json({ message: 'Failed to add Top Value', error: err });
                    });
            } else {
                res.json({ message: 'Only 3 Top Values allowed' });
            };
        });
});

// UPDATE INFORMATION
// ✅ update a value
router.put('/:id', findValue, (req, res) => {
    const valueChanges = req.body;

    Values.update(req.value.id, valueChanges)
        .then(updatedValue => {
            res.status(200).json(updatedValue);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to update Value', error: err });
        });
});

// REMOVE INFORMATION
// ✅ delete a value
router.delete('/:id', findValue, (req, res) => {
    Values.remove(req.value.id)
        .then(removed => {
            res.status(200).json(removed);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to remove Value', error: err });
        });
});

// ✅ delete a user value
router.delete('/user/:user_id/:user_value_id', findUser, (req, res) => {
    const { user_value_id } = req.params;

    Values.removeUser(user_value_id)
        .then(removed => {
            res.status(200).json(removed);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to remove User Value', error: err });
        });
});

// ✅ delete a users top value
router.delete('/user/:user_id/top-values/:top_id', findUser, (req, res) => {
    const { top_id } = req.params;

    Values.removeTop(top_id)
        .then(removed => {
            res.status(200).json(removed);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to remove Top Value', error: err });
        });
});

module.exports = router;