
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {id: 1, name: 'Tech_Gym'},
        {id: 2, name: 'Miromiro-2017'},
        {id: 3, name: 'Kahu-2018'},
        {id: 4, name: 'Harakeke-2018'},
        {id: 5, name: 'Kokako-2018'}
      ]);
    });
};
