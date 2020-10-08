const Car = require('../pkg/cars');

const GetAll = async (req, res) => {
    try {
        let cs = await Car.GetAll();
        res.status(200).send(cs);
    } catch(err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
};

const GetOne = async (req, res) => {
    try {
        let c = await Car.GetOne(req.params.id);
        if(c.length > 0){
            res.status(200).send(c[0]);
        } else {
            res.status(404).send('Not found');
        }
    } catch(err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
};

const Create = async (req, res) => {
    try {
        let c = await Car.Create(req.body);
        res.status(201).send(c);
    } catch(err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
    // res.send('ok');
};

const Update = async (req, res) => {
    try {
        await Car.Update(req.params.id, req.body);
        res.status(204).send('');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
};

const UpdatePartial = async (req, res) => {
    try {
        await Car.UpdatePartial(req.params.id, req.body);
        res.status(204).send('');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
};

const Remove = async (req, res) => {
    try {
        await Car.Remove(req.params.id);
        res.status(204).send('');
    } catch(err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
};

module.exports = {
    GetAll,
    GetOne,
    Create,
    Update,
    UpdatePartial,
    Remove
};