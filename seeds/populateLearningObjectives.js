
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('learningObjectives').del()
    .then(function () {
      // Inserts seed entries
      return knex('learningObjectives').insert([
        {id: 1, title: 'Use Postgresql locally'},
        {id: 2, title: 'Vue.js'},
        {id: 3, title: 'Full Stack Project'}
      ]);
    });
};
