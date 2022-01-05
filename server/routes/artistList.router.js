const pg = require('pg'); 
const express = require('express');
const artistRouter = express.Router();

const pool = new pg.Pool({
    database: 'jazzy_sql',
    host: 'localhost',
    port: 5432
});

artistRouter.get('/', (req, res) => {

    const queryText = 'SELECT * FROM artistlist ORDER BY UPPER(birthdate) DESC';

    pool.query(queryText)
        .then((dbRes) =>{
            
            res.send(dbRes.rows);
            
        })
        .catch((err) => {
            console.log('GET /artist failed', err);
            
            //Tell the client that it failed
            res.sendStatus(500);
        });
});

artistRouter.post('/', (req, res) =>{
    console.log('req.body is ', req.body);

    let queryText = `
        INSERT INTO "artistlist"
            ("name", "birthdate")
        VALUES
            ($1, $2)
    `;
    
    let queryParams = [
        req.body.name,
        req.body.birthdate
    ]

    pool.query(queryText, queryParams)
        .then((dbRes) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('POST failed', err);
            res.sendStatus(500);
        })
})

module.exports = artistRouter;