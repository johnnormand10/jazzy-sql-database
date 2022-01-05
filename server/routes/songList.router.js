const express = require('express');
const pool = require('../modules/pool');


const songRouter = express.Router();



songRouter.get('/', (req, res) => {
    const queryText = 'SELECT * FROM songlist ORDER BY title ASC';

    pool.query(queryText)
        .then((songs) => {
            res.send(songs.rows)
        })
        .catch((err) => {
            console.log('GET /song failed', err);
            res.sendStatus(500);
        });
});

songRouter.post('/', (req, res) => {
    console.log('req.body is', req.body);
    
    let queryText = `
        INSERT INTO "songlist"
            ("title", "length", "released")
        VALUES
            ($1, $2, $3)
    `;

    let queryParams = [
        req.body.title,
        req.body.length,
        req.body.released
    ];

    pool.query(queryText, queryParams)
        .then((song) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('POST failed', err);
            res.sendStatus(500);
        })
})

module.exports = songRouter;