const db = require('../database/dbConfig.js');

module.exports = {
    add,
    update,
    remove,
    find,
    findById,
    findByUserId
}

async function add(value) {
    const [id] = await db('top_values')
        .insert(value);

    return findById(id);        
};

async function update(id, changes) {
    await db('top_values')
        .where({ id })
        .update(changes);

    return findById(id);
};

async function remove(id) {
    const removed = await findById(id);

    await db('top_values')
        .where({ id })
        .del();

    return removed;
};

function find() {
    return ('top_values');
};

function findById(id) {
    return db('top_values')
        .where({ id })
        .first();
};

function findByUserId(user_id) {
    return db('top_values')
        .where({ user_id });
};
