
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('top_values').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('top_values').insert([
        {
          id: 1,
          user_id: 1, 
          value_id: 5,
          priority: 1
        },
        {
          id: 2,
          user_id: 1, 
          value_id: 12,
          priority: 2
        },
        {
          id: 3,
          user_id: 1, 
          value_id: 14,
          priority: 3
        },
      ]);
    });
};
