// find values, add values, update values, remove values
// find user values, add user values, update user values, remove user values
// find top values, add top values, update top values, remove top values

const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findBy,
    findById,
    findByUser,
    findSpecific,
    findTop,
    findTopById,
    add,
    addUser,
    addTop,
    update,
    remove,
    removeUser,
    removeTop
}

function find() {
    return db('values');
};

function findBy(filter) {
    return db('values')
        .where(filter);
}

function findById(id) {
    return db('values')
        .where({ id })
        .first();
};

function findByUser(user_id) {
    return db('user_values as UV')
        .where('user_id', user_id)
        .join('values as V', 'UV.value_id', 'V.id')
        .select('UV.id', 'UV.user_id', 'UV.value_id', 'V.name');
};

function findSpecific(id) {
    return db('user_values as UV')
        .where('UV.id', id)
        .join('values as V', 'UV.value_id', 'V.id')
        .select('UV.id', 'UV.user_id', 'UV.value_id', 'V.name');
};

function findTop(user_id) {
    return db('top_values as TV')
        .where('TV.user_id', user_id)
        .join('values as V', 'TV.value_id', 'V.id')
        .select('TV.id', 'TV.user_id', 'TV.value_id', 'TV.priority', 'V.name');
};

function findTopById(top_id) {
    return db('top_values as TV')
        .where('TV.id', top_id)
        .join('values as V', 'TV.value_id', 'V.id')
        .select('TV.id', 'TV.user_id', 'TV.value_id', 'TV.priority', 'V.name');
};

async function add(value) {
    // expects value = {name}
    const [id] = await db('values')
        .insert(value);

    return findById(id);
};

async function addUser(value) {
    // expects value = {user_id, value_id}
    await db('user_values')
        .insert(value);

    return findById(value.value_id);
};

async function addTop(value) {
    // expects value = {user_id, value_id, priority}
    await db('top_values')
        .insert(value);

    return findById(value.value_id);
};

async function update(id, changes) {
    // expects id = id of value
    // expects changes = {id, name}
    if (id > 14) {
        await db('values')
        .where({ id })
        .update(changes);

        return findById(id);
    } else {
        return { message: 'Cannot update this Value' };
    };    
};

async function remove(id) {
    const removed = await findById(id);

    if (id > 14) {
        await db('values')
        .where({ id })
        .del();

        return removed[0];
    } else {
        return { message: 'Cannot remove this Value' };
    };
};

async function removeUser(id) {
    const removedValue = await findSpecific(id);

    await db('user_values')
        .where({ id })
        .del();
    
    return removedValue;
};

async function removeTop(id) {
    const removedTop = await findTopById(id);

    await db('top_values')
        .where({ id })
        .del();

    return removedTop;
};