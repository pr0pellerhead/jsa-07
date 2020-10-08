const mongoose = require('mongoose');

const User = mongoose.model(
    'User',
    {
        first_name: String,
        last_name: String
    },
    'users'
);

mongoose.connect(
        'mongodb+srv://dev:dev123!@cluster0.c3iyx.mongodb.net/baza1?retryWrites=true&w=majority',
        {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(() => {
        console.log('Successfully connected to database');
        let u = new User({ first_name: 'Ivan', last_name: 'Jankovski' });
        return u.save();
    })
    .then(data => {
        console.log(data);
        return User.find({});
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });

