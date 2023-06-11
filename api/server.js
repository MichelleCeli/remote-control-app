const express = require('express');
const path = require('path');
const app = express(),
    bodyParser = require('body-parser');
    port = 3080;

    const users = [];

    app.get('/api/test', (req, res) => {
        console.log('test is visited!');
        res.json(users);
    })

app.get('/', (req, res) => {
    console.log('webpage visited');
})




app.listen(port, () => {
    console.log('Server listening on the port: ' + port);
});

