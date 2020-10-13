const UserModel = require('../pkg/users');
const UserValidator = require('../pkg/users/validator');
const bcrypt = require('bcryptjs');

const create = async (req, res) => {
    // validate user sent input
    let v = await UserValidator.Validate(req.body, UserValidator.UserCreationSchema);
    if(!v) {
        console.log('validation error');
        return res.status(400).send('Bad request [invalid data]');
    }
    // check if the two passwords are the same
    if(req.body.password !== req.body.password2){
        console.log('validation error');
        return res.status(400).send('Bad request [passwords missmatch]');
    }
    // check if user with same email already exists
    let u = await UserModel.GetOneByEmail(req.body.email);
    if(u != null) {
        console.log('user validation error');
        return res.status(400).send('Bad request [user exists]');
    }
    // bojan -> o2u3xpuqoxubpoqubcp8 = hashing (bcrypt)
    // bojan <-> osiu1hpd9ub3pxnp = encrypting
    // hash the password
    req.body.password = bcrypt.hashSync(req.body.password);
    try {
        // save user data into database
        let out = await UserModel.Create(req.body);
        out.__v = null;
        out.password = null;
        return res.status(201).send(out);
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

const getAll = async (req, res) => {
    res.status(200).send('ok');
};

const getOne = async (req, res) => {
    res.status(200).send('ok');
};

const update = async (req, res) => {
    res.status(200).send('ok');
};

const remove = async (req, res) => {
    res.status(200).send('ok');
};

module.exports = {
    create,
    getAll,
    getOne,
    update,
    remove
};


// encrypting
// 2 + 2 = 4 <-> 4 - 2 = 2
// 3 + 6 = 9 <-> 9 - 6 = 3

// hashing
// 2 + a = b