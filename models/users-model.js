const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findBy,
    findById,
    findUser,
    // findTotalUser,
    add,
    addInfo,
    update,
    updateInfo,
    remove
};

function find() {
    return db('users');
};

function findBy(filter) {
    return db('users').where(filter);
};

function findById(id) {
    return db('users')
        .where({ id })
        .first();
};

function findUser(id) {
    return db('user_info')
        .where('user_id', id)
}

function add(user) {
    // expects user = {username, password} where password is a hash
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
};

async function addInfo(info) {
    // expects info = {user_id, name, nickname}
    const [user_id] = await db('user_info').insert(info);

    return findUser(user_id);
}

async function update(id, changes) {
    // expects id = id of user
    // expects changes = {id, username, password} where password is a hash
    await db('users')
        .where({ id })
        .update(changes);

    return findById(id);
};

async function updateInfo(id, changes) {
    // expects id = user_id
    // expects changes = {user_id, name, nickname}
    await db('user_info')
        .where('user_id', id)
        .update(changes);

    return findUser(id);
}

async function remove(id) {
    const removed = await findById(id);

    await db('users')
        .where({ id })
        .del();

    return removed;
};