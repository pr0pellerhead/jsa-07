const movieData = require('../pkg/movies');

const GetAll = (req, res) => {
   movieData.Read()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
};

const GetOne = (req, res) => {
    movieData.Read()
        .then(data => {
            if(data[req.params.id] === undefined) {
                throw {message: 'Not found', code: 404};
            }
            res.status(200).send(data);
        })
        .catch(err => {
            console.error(err);
            let status = 500;
            let message = 'Internal Server Error';
            if(err.code !== undefined) {
                status = err.code;
                message = err.message;
            }
            res.status(status).send(message);
        });
};

const Create = (req, res) => {
    res.send('ok');
};

const Update = (req, res) => {
    res.send('ok');
};

const Remove = (req, res) => {
    res.send('ok');
};

module.exports = {
    GetAll,
    GetOne,
    Create,
    Update,
    Remove,
};