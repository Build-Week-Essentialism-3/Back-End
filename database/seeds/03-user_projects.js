
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user_projects').insert([
        {
          id: 1,
          user_id: 1,
          project: 'Build Week Project',
          description: 'Create an entire Backend for Essentialism' 
        },
        {
          id: 2,
          user_id: 1,
          project: 'Read a book',
          description: 'Read an entire novel on kindle' 
        },
        {
          id: 3,
          user_id: 1,
          project: 'Eat Better',
          description: 'make better food choices' 
        }
      ]);
    });
};
