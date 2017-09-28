
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('learningPlans').del()
    .then(function () {
      // Inserts seed entries
      return knex('learningPlans').insert([
        {id: 1, user_id: 1, plan: "I want to practice the EDA stack by building a project in the tech we teach"},
        {id: 2, user_id: 2, plan: "Setup postgresql locally for myself to help students in tech gym"},
        {id: 3, user_id: 3, plan: "Vue is pretty cool"}
      ]);
    });
};