const pg = require('pg');

const pool = new pg.Pool({
    database: 'jazzy_sql',
    host: 'localhost',
    port: 5432
});

modules.export = pool;