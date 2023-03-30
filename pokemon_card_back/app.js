const express = require('express');
const {
    default: mongoose
} = require('mongoose');
const app = express();
const User = require('./models/user.model');
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


