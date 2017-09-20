
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('conversations').del()
    .then(function () {
      // Inserts seed entries
      return knex('conversations').insert([
        {id: 1, name: 'Harrison and Joshua'},
        {id: 2, name: "What's for Lunch"}
      ]);
    });
};
