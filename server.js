const express = require('express');
const getRandomPoke = require('./api.js');
const path = require('path');

const app = express();
const port = 80;

app.use(express.static('public'));

app.get('/api/randomPokemon', (req, res) => {
    res.send(getRandomPoke());
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
})

app.listen(port, () => {
    console.log('Example app listening on port', port);
})