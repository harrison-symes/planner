exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('usersInCohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('usersInCohorts').insert([
        {user_id: 1, cohort_id: 1},
        {user_id: 2, cohort_id: 1},
        {user_id: 3, cohort_id: 1},
        {user_id: 1, cohort_id: 2}
      ]);
    });
};
