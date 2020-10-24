const express = require('express');
const weather = require('openweather-apis');
const config = require('./pkg/config');
const mailgun = require('mailgun-js');
const fs = require('fs');
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

api.get('/mailer', (req, res) => {
    console.log('send email');

    // DO NOT DO THIS IN PRODUCTION!!!!!!
    let tpl = fs.readFileSync('./mail_templates/sample_template.html', 'utf8');
    tpl = tpl.replace(/\{\{name\}\}/g, 'Bojan');
    
    let mg = mailgun({ 
        apiKey: config.Get('email').api_key, 
        domain: config.Get('email').domain 
    });

    var data = {
        from: 'Pero Perovski <pero@pero.com>',
        to: 'bojang@gmail.com',
        subject: 'Hello Bojan!',
        text: 'Testing some Mailgun awesomeness!',
        html: tpl
    };

    mg.messages().send(data, function (err, body) {
        if(err) {
            console.log(err);
            return res.status(500).send('Internal server error');
        }
        console.log(body);
        res.status(200).send('ok');
    });
});

api.listen(8001, err => {
    if(err) {
        return console.log(err);
    }
    console.log('Service started on port 8001');
});
