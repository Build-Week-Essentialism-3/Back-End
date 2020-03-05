// find prompts, add prompts, update prompts, remove prompts

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
    return db('prompt');
};

function findBy(filter) {
    return db('prompt')
        .where(filter);
};

function findById(id) {
    return db('prompt')
        .where({ id })
        .first();
};

function findByUser(user_id) {
    return db('prompt')
        .where('user_id', user_id);
}

async function add(prompt) {
    // expects prompt = {user_id, description}
    const [id] = await db('prompt')
        .insert(prompt);
    
    return findById(id);
};

async function update(id, changes) {
    // expects id = id of prompt
    // expects changes = {id, user_id, description}
    await db('prompt')
        .where({ id })
        .update(changes);

    return findById(id);
};

async function remove(id) {
    const removed = await findById(id);

    await db('prompt')
        .where({ id })
        .del();

    return removed;
};