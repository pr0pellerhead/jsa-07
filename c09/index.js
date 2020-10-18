require('./pkg/db');

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const config = require('./pkg/config');
const Users = require('./handlers/users');
const Auth = require('./handlers/auth');

const api = express();

api.use(bodyParser.json());
// json web token middleware checks if a jw token was sent with 
// the request in the Authorization header
api.use(jwt({
        secret: config.Get('server').jwt_key, // the secret key that we have in the config.json
        algorithms: ['HS256'] // algo used for (un)signing the token
    }).unless({
        path: [ // list of routes that are not checked for jw token
            { url: '/users', methods: ['POST', 'GET'] },
            // { url: /\/users\/.*/, methods: ['GET'] },
            { url: '/auth/login', methods: ['POST'] },
        ]
    })
);

api.post('/users', Users.create);
api.get('/users', Users.getAll);
api.get('/users/:id', Users.getOne);
api.put('/users/:id', Users.update);
api.delete('/users/:id', Users.remove);

api.post('/auth/login', Auth.login);
api.get('/auth/refresh-token', Auth.refreshToken);
api.get('/auth/logout', Auth.logout);

// check if the output is "unauthorized error"
// and if so, show the "invalid token..." text
api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Bad token...');
    }
});

api.listen(config.Get('server').port, err => {
    if(err) {
        return console.error(err);
    }
    console.log(`Server started on port ${config.Get('server').port}`);
});

