
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('learningObjectives', table => {
    table.increments('id')
    table.string('title')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('learningObjectives')
};
