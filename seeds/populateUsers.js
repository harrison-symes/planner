var {generateSync} = require('../server/auth/hash')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, user_name: 'Harrison', hash: generateSync('password')},
        {id: 2, user_name: 'Joshua', hash: generateSync('password')},
        {id: 3, user_name: 'Don', hash: generateSync('password')}
      ]);
    });
};
