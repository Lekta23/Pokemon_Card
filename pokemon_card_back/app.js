const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const UserRouter = require('./routes/user.route');

app.get('/', async (req, res) => {
    res.send('Hello World!');
});

app.use(express.json());


app.use(cors());
app.use('/users', UserRouter);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});