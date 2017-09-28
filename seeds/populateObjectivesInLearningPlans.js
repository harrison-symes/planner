
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('objectivesInPlans').del()
    .then(function () {
      // Inserts seed entries
      return knex('objectivesInPlans').insert([
        {objective_id: 1, learning_plan_id: 1},
        {objective_id: 2, learning_plan_id: 1},
        {objective_id: 3, learning_plan_id: 1},
        {objective_id: 2, learning_plan_id: 2},
        {objective_id: 3, learning_plan_id: 3}
      ]);
    });
};
