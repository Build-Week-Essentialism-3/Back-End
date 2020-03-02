
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_info').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user_info').insert([
        {
          user_id: 1, 
          name: 'Brittani',
          nickname: 'Britt'
        }
      ]);
    });
};
