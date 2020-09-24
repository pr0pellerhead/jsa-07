const fs = require('fs');

const file = 'dokument.txt';

const fileRead = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if(err) {
                return reject(err);
            }
            return resolve(data);
        });
    });
};

const textCounter = (text) => {
    return new Promise((resolve, reject) => {
        let words = text.split(' ').length;
        let sentences = text.split('. ').length;
        let chars = text.length;

        console.log('Number of words:', words);
        console.log('Number of sentences:', sentences);
        console.log('Number of characters:', chars);

        return resolve(text);
    });
};

fileRead(file)
    .then(data => {
        return textCounter(data);
    })
    .then(data => {
        let words = data.split(' ');
        let le5 = 0;
        let e6 = 0;
        let ge7 = 0;

        for(let i = 0; i < words.length; i++) {
            if(words[i].length <= 5) {
                le5++;
            } else if(words[i].length === 6) {
                e6++;
            } else {
                ge7++;
            }
        }

        console.log('Less or equal to 5:', le5);
        console.log('Equal to 6:', e6);
        console.log('Greater or equal to 7:', ge7);
    })
    .catch(err => {
        console.error(err);
    });