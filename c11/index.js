const express = require('express');
const weather = require('openweather-apis');

const api = express();

api.get('/weather', (req, res) => {
    weather.setAPPID('...');
    weather.setLang('en');
    weather.setCity('Skopje');

    // weather.getTemperature(function(err, temp){
    //     if(err) {
    //         console.log(err);
    //         return res.status(500).send('Internal server error');
    //     }
    //     return res.status(200).send(''+temp);
    // });

    weather.getAllWeather((err, data) => {
        if(err) {
            return res.status(500).send('internal server error');
        }
        return res.status(200).send(data);
    });
});

api.listen(8001, err => {
    if(err) {
        return console.log(err);
    }
    console.log('Service started on port 8001');
});