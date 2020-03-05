const Projects = require('../models/projects-model.js');

module.exports = (req, res, next) => {
    const { id } = req.params;

    Projects.findById(id)
        .then(project => {
            if (project) {
                req.project = project;
                next();
            } else {
                res.status(404).json({ message: 'Cannot find the project' });
            };
        });
};