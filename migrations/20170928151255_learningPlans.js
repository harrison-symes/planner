var moment = require('moment')
var {tz} = require('moment-timezone')

exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('learningPlans', table => {
    table.increments('id')
    table.integer('user_id')
    table.text('plan')
    table.boolean('is_reflected').defaultTo(false)
    table.boolean('is_reviewed').defaultTo(false)
    table.timestamp('created_at').defaultTo(moment(knex.fn.now()).tz('Pacific/Auckland').format())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('learningPlans')
};
