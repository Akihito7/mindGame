exports.up = knex => knex.schema.createTable("users", table => {
    table.increments("id");
    table.string("username").unique();
    table.string("password").notNull();
    table.string("firstName",29).notNull();
    table.string("lastName",29).notNull();
    table.date("birthday").notNull();
    table.string("gender").notNull();
    table.string("favoriteGame");
    table.string("aboutMe");
    table.string("email").notNull();
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("update_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("users");