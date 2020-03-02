const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      let password = '123456'

      const hash = bcrypt.hashSync(password, 10);
      password = hash;

      return knex('users').insert([
        {
          id: 1, 
          username: 'testing',
          password: password
        }
      ]);
    });
};
