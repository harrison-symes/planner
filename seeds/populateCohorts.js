
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {id: 1, name: 'Tech_Gym', description: 'Dummy', is_private: true},
        {id: 2, name: 'Miromiro-2017', description: 'Dummy', is_private: false},
        {id: 3, name: 'Kahu-2018', description: 'Dummy', is_private: false},
        {id: 4, name: 'Harakeke-2018', description: 'Dummy', is_private: false},
        {id: 5, name: 'Kokako-2018', description: 'Dummy', is_private: false}
      ]);
    });
};
