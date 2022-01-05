const pg = require('pg'); 
const express = require('express');
const router = express.Router();

const pool = new pg.Pool({
    database: 'artistList',
    host: 'localhost',
    port: 5432
});

router.get('/', (req, res) => {

    const queryText = 'SELECT * FROM songs';

    pool.query(queryText)
        .then((dbRes) =>{
            
            res.send(dbRes.rows);
            
        })
        .catch((err) => {
            console.log('GET /songs failed', err);
            
            //Tell the client that it failed
            res.sendStatus(500);
        });
});