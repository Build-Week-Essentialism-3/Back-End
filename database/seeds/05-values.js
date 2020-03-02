
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('values').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('values').insert([
        {
          id: 1, 
          name: 'Athletic ability'},
        {
          id: 2, 
          name: 'Art and literature'
        },
        {
          id: 3, 
          name: 'Creativity, discovering, or inventing things to make a difference in the world'
        },
        {
          id: 4, 
          name: 'Independence'
        },
        {
          id: 5, 
          name: 'Kindness and generosity'
        },
        {
          id: 6, 
          name: 'Living in the moment'
        },
        {
          id: 7, 
          name: 'Membership in a social group (such as your community, racial group, or school club)'
        },
        {
          id: 8, 
          name: 'Music'
        },
        {
          id: 9, 
          name: 'My community'
        },
        {
          id: 10, 
          name: 'My moral principles'
        },
        {
          id: 11, 
          name: 'Nature and the environment'
        },
        {
          id: 12, 
          name: 'Relationships with friends and family'
        },
        {
          id: 13, 
          name: 'Sense of humor'
        },
        {
          id: 14, 
          name: 'Success in my career'
        },
      ]);
    });
};
