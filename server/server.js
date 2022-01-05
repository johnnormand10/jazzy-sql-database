const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));


let artistRouter = require('./routes/artistList.router');
app.use('/artist', artistRouter);


app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

app.get('/song', (req, res) => {
    console.log(`In /songs GET`);
    res.send(songList);
});

app.post('/song', (req, res) => {
    songList.push(req.body);
    res.sendStatus(201);
});


