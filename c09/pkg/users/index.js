const mongoose = require('mongoose');

const User = mongoose.model(
    'User',
    {
        full_name: String,
        email: String,
        password: String,
        birthday: Date,
        phone: String
    },
    'users'
);

const Create = (data) => {
    let u = new User(data);
    return u.save();
};

const GetAll = () => {
    // return User.find({}, {password: 0}); // {password: 0} tells mongo db not to return the password field
    return User.find({}, {email: 1}); // {email: 1} tells mongo db to return ONLY the email field
};

const GetOne = (id) => {
    return User.findOne({_id: id});
};

const GetOneByEmail = (email) => {
    return User.findOne({ email: email });
};

const Update = (id, data) => {
    return User.update({_id: id}, data);
};

const Remove = (id) => {
    return User.deleteOne({_id: id});
};

module.exports = {
    Create,
    GetAll,
    GetOne,
    GetOneByEmail,
    Update,
    Remove
};