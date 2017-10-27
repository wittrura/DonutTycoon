
exports.up = function(knex, Promise) {
  return knex.schema.table('employees', (table) => {
    table.integer('favorite_donut')
      .references('id')
      .inTable('donuts');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('employees', (table) => {
    table.dropColumn('favorite_donut');
  });
};
