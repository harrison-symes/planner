
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('learningPlans', table => {
    table.increments('id')
    table.integer('user_id')
    table.text('plan')
    table.boolean('is_reflected').defaultTo(false)
    table.boolean('is_reviewed').defaultTo(false)
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('learningPlans')
};
