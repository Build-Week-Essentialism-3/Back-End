// ✅✅✅ All routes tested in postman and working
const router = require('express').Router();

const findProject = require('../middleware/find-project.js');


const Projects = require('../models/projects-model.js');

// GET INFORMATION
// ✅ get project by id
router.get('/:id', findProject, (req, res) => {
    Projects.findById(req.project.id)
        .then(project=> {
            res.status(200).json(project);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to retrieve Project', name, code, message, stack });
        });
});

// ADD INFORMATION
// ✅ add a project
router.post('/', (req, res) => {
    const addProject = req.body;

    Projects.add(addProject)
        .then(added => {
            res.status(201).json(added);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to add Project', name, code, message, stack });
        });
});

// UPDATE INFORMATION
// ✅ update a project
router.put('/:id', findProject, (req, res) => {
    const projectChange = req.body;

    Projects.update(req.project.id, projectChange)
        .then(updatedProject => {
            res.status(200).json(updatedProject);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to update Project', name, code, message, stack });
        });
});

// DELETE INFORMATION
// ✅ delete a project
router.delete('/:id', findProject, (req, res) => {
    Projects.remove(req.project.id)
        .then(removed => {
            res.status(200).json(removed);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ error: 'Failed to delete Project', name, code, message, stack });
        });
});

module.exports = router;