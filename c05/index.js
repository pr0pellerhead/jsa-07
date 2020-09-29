// import libraries
const express = require('express');
const bodyParser = require('body-parser');

// import local modules
const movies = require('./handlers/movies');

// api setup
const api = express();

// middleware setup
api.use(bodyParser.json());

// routes setup
api.get('/movies', movies.GetAll);
api.get('/movies/:id', movies.GetOne);
api.post('/movies', movies.Create);
api.put('/movies/:id', movies.Update);
api.delete('/movies/:id', movies.Remove);

// start server
api.listen(9000, err => {
    if(err) {
        return console.error(err);
    }
    return console.log('API started on port 9000');
});