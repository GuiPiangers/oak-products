import Knex from "knex";
import { development } from "../../knexfile";

export const database = Knex(development)