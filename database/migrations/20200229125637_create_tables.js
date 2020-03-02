
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl
            .string('username', 50)
            .notNullable()
            .unique();
        tbl
            .string('password', 255)
            .notNullable()
            .unique();
    })
    .createTable('user_info', tbl => {
        tbl.primary(['user_id']);
        tbl
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .string('name', 255)
            .notNullable();
        tbl
            .string('nickname', 255);
    })
    .createTable('user_projects', tbl => {
        tbl.increments();
        tbl
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .string('project', 255)
            .notNullable();
        tbl
            .string('description', 500);
    })
    .createTable('prompt', tbl => {
        tbl.increments();
        tbl
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .string('description', 800)
            .notNullable();
    })
    .createTable('values', tbl => {
        tbl.increments();
        tbl
            .string('name', 255)
            .notNullable()
            .unique();
    })
    .createTable('user_values', tbl => {
        tbl.increments();
        tbl
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .integer('value_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('values')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
    .createTable('top_values', tbl => {
        tbl.increments();
        tbl
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .integer('value_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('values')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .integer('priority')
            .notNullable();
    })
    .createTable('user_goals', tbl => {
        tbl.increments();
        tbl
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .integer('value_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('values')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .string('goal', 255)
            .notNullable();
        tbl
            .string('description', 500);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_goals')
        .dropTableIfExists('top_values')
        .dropTableIfExists('user_values')
        .dropTableIfExists('values')
        .dropTableIfExists('prompt')
        .dropTableIfExists('user_projects')
        .dropTableIfExists('user_info')
        .dropTableIfExists('users');
};
