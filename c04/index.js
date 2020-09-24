const express = require('express');
const bodyParser = require('body-parser');

const studenti = [
    {fname: 'Pero', lname: 'Perovski'},
    {fname: 'Janko', lname: 'Jankovski'},
    {fname: 'Stanko', lname: 'Stankovski'},
    {fname: 'Ivan', lname: 'Ivanovski'}
];

const api = express();

api.use(bodyParser.json()); // middleware

api.get('/studenti', (req, res) => {
    res.send(studenti);
});

api.get('/studenti/:index', (req, res) => {
    if (studenti[req.params.index] !== undefined) {
        res.send(studenti[req.params.index]);
    } else {
        res.status(404).send('not found');
    }
});

api.post('/studenti', (req, res) => {
    studenti.push(req.body);
    res.status(201).send(req.body);
});

api.put('/studenti/:index', (req, res) => {
    res.send('put updated student!');
});

// api.patch('/studenti/:index', (req, res) => {
//     res.send('patch updated student!');
// });

api.delete('/studenti/:index', (req, res) => {
    res.send('deleted a student!');
});

// CRUD -> Create, Read, Update, Delete

// GET /studenti -> земи информации за сите студенти (земи ги сите студенти)
// GET /sudenti/:index -> земи детални информации за студентот со индекс :index
// POST /studenti -> додади нов студент
// PUT/PATCH /studenti/:index -> измени ги информациите за студентот со индеџ :index
// DELETE /studenti/:index -> избриши го студентот со индекс :index



api.listen(9000, err => {
    if(err) {
        return console.error(err);
    }
    console.log('Server successfully started on port 9000');
});

// GET, POST, PUT, PATCH, DELETE -> HTTP METHODS

// {
//     id: 12,
//     ime: 'Pero',
//     prezime: 'Perovski'
// }

// PUT
// {
//     id: 12,
//     ime: 'Janko',
//     prezime: 'Perovski'
// }

// PATCH
// {
//     ime: 'Janko',
// }

