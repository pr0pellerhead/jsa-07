const { Validator } = require('node-input-validator');

const CarSchema = {
    manufacturer: 'required|minLength:2',
    model: 'minLength:2|maxLength:10|required',
    year: 'required|integer'
};

const validate = (data) => {
    let v = new Validator(data, CarSchema);
    return v.check();
};

module.exports = {
    validate
};