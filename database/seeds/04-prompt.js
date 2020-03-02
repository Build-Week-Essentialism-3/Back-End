
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('prompt').del()
    .then(function () {
      // Inserts seed entries
      return knex('prompt').insert([
        {
          id: 1,
          user_id: 1,
          description: 'This is my prompt response about why my values are important to me. I want to be more focused. This is important.'
        }
      ]);
    });
};
