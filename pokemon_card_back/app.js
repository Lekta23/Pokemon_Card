const express = require('express');
const app = express();
const port = 5000;


// Pokemon_Card

// Connection à la base de données
app.get('/', async (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});