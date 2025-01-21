import { Knex } from "knex";

export const development: Knex.Config = {
    client: "sqlite3",
    connection: {
        filename: "./database.sqlite",
    },
    useNullAsDefault: true,
    migrations: {
        directory: "./migrations",
    },
};
