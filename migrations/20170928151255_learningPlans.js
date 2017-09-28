
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('learningPlans', table => {
    table.increments('id')
    table.integer('user_id')
    table.text('plan')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('learningPlans')
};
