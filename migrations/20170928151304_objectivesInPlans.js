
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('objectivesInPlans', table => {
    table.integer('objective_id')
    table.integer('learning_plan_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('objectivesInPlans')
};
