
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('learningObjectives', table => {
    table.increments('id')
    table.string('title')
    table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('learningObjectives')
};
