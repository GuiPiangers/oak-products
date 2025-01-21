import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("products", (table) => {
        table.string("id").primary();
        table.string("name").notNullable();
        table.string("description").nullable()
        table.float("value").notNullable()
        table.boolean("available")
        table.timestamps(true, true);
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("products")
}

