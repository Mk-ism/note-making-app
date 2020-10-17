const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');

//express app creation
const app = express();

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.get('/', (req, res) => {
    console.log("welcome to note-making-app");
    res.send("welcome to note-making-app");
    res.status(200).send();
});

app.use('/users', require('./routes/users'));
app.use('/notes', require('./routes/notes'));

app.listen(5000, () => {
    console.log('app working on port: 5000');
});