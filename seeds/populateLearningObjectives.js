
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('learningObjectives').del()
    .then(function () {
      // Inserts seed entries
      return knex('learningObjectives').insert([
        {id: 1, title: 'Use Postgresql locally', user_id: 2},
        {id: 2, title: 'Vue.js', user_id: 3},
        {id: 3, title: 'Full Stack Project', user_id: 1}
      ]);
    });
};
