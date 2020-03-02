
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_values').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user_values').insert([
        {
          user_id: 1, 
          value_id: 3
        },
        {
          user_id: 1, 
          value_id: 5
        },
        {
          user_id: 1, 
          value_id: 10
        },
        {
          user_id: 1, 
          value_id: 12
        },
        {
          user_id: 1, 
          value_id: 13
        },
        {
          user_id: 1, 
          value_id: 14
        }
      ]);
    });
};
