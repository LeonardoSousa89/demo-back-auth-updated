"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = require("knex");
exports.default = knex_1.knex({
    client: 'pg',
    connection: process.env.DATABASE_URL
});
