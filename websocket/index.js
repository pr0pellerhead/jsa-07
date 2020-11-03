const express = require('express');
const ws = require('ws');

const app = express();

app.use(express.static('www'));

app.listen('10000', err => {
    if(err) {
        return console.log('Server could not start:', err);
    }
    console.log('Server successfully started on port 10000');
});

const wss = new ws.Server({
    port: 11000
});

const connections = [];

wss.on('connection', (ws) => {

    ws.on('message', (message) => {
        console.log('received: %s', message);
        let msg = JSON.parse(message);

        let rev = msg.msg;
        // for(let i = msg.msg.length-1; i >= 0; i--) {
        //     rev += msg.msg[i];
        // }

        for(let a = 0; a < connections.length; a++){
            connections[a].send(JSON.stringify({
                msg: rev,
                handle: msg.handle
            }));
        }
    });

    ws.send(JSON.stringify({msg: 'connected', handle: 'server'}));
    connections.push(ws);
});