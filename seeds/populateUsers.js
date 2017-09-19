var {generateSync} = require('../server/auth/hash')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, user_name: 'symeshjb', first_name: 'Harrison', last_name: 'Symes', about: 'I made dis', hash: generateSync('password')},
        {id: 2, user_name: 'joshua', hash: generateSync('password')},
        {id: 3, user_name: 'don', hash: generateSync('password')}
      ]);
    });
};
