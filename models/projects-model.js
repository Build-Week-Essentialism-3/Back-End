// find projects, add projects, update projects, remove projects

const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findBy,
    findById,
    findByUser,
    add,
    update,
    remove
};

function find() {
    return db('user_projects');
};

function findBy(filter) {
    return db('user_projects').where(filter);
};

function findById(id) {
    return db('user_projects')
        .where({ id })
        .first();
};

function findByUser(user_id) {
    return db('user_projects')
        .where('user_id', user_id);
};

async function add(project) {
    // expects project = {user_id, project, description}
    const [id] = await db('user_projects').insert(project);

    return findById(id);
};

async function update(id, changes) {
    // expects id = id of project
    // expects changes = {id, user_id, project, description}
    await db('user_projects')
        .where({ id })
        .update(changes);

    return findById(id);
};

async function remove(id) {
    const removed = await findById(id);

    await db('user_projects')
        .where({ id })
        .del();

    return removed;
};