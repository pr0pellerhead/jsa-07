const express = require('express');
const jwt = require('express-jwt');
const upload = require('express-fileupload');
const config = require('./pkg/config');
const storage = require('./handlers/storage');

const api = express();

api.use(jwt({
    secret: config.Get('server').jwt_key,
    algorithms: ['HS256']
}));

api.use(upload({
    limits: { fileSize: 50 * 1024 * 1024 }
}));

api.post('/storage', storage.save);
api.get('/storage/:file', storage.retrieve);

api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Bad token...');
    }
});

api.listen(config.Get('server').port, err => {
    if(err) {
        return console.log(err);
    }
    console.log(`Service successfully started on port ${config.Get('server').port}`);
})