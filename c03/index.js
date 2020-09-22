const fs = require('fs');

fs.writeFile('data.txt', 'TEST TEST TEST', err => {
    if(err) {
        console.error(err);
    }
    console.log('Write done!');

    fs.appendFile('data.txt', 'BLAH BLAH BLAH', err => {
        if (err) {
            console.error(err);
        }
        console.log('Done!');

        fs.readFile('data.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            }
            console.log(data);
        });
    });
});

const fileWrite = (file, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, content, err => {
            if(err) {
                return reject(err);
            }
            return resolve();
        });
    });
};

// fileWrite('text.txt', 'Hello world!')
//     .then(() => {
//         console.log('Promise done!');
//     })
//     .catch(err => {
//         console.error(err);
//     });

const fileAppend = (filename, content) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(filename, content, err => {
            if(err) {
                return reject(err);
            }
            return resolve();
        });
    });
};

// fileAppend('text.txt', ' Hello again ')
//     .then(() => {
//         console.log('Append finished');
//     })
//     .catch(err => {
//         console.error(err);
//     });

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

// fileRead('text.txt')
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

fileWrite('text.txt', 'Promise chaining...')
    .then(() => {
        return fileAppend('text.txt', ' Chain 1');
    })
    .then(() => {
        return fileRead('text.txt');
    })
    .then(data =>{
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });

const fileWork = async () => {
    try {
        await fileWrite('text.txt', 'Async/await chaining...');
        await fileAppend('text.txt', ' Append...');
        let data = await fileRead('text.txt');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};

fileWork();

const getConfig = () => {
    let data = fs.readFileSync('config.json', 'utf8');
    return JSON.parse(data);
}

console.log(getConfig().db.dbname);
console.log(getConfig().mail.key);
console.log(getConfig().server.port);


// Креирајте текстуален документ со 5 параграфи текст од следниов линк
// https://www.lipsum.com/feed/html

// 1. Отворете го документот користејќи node.js функција (readFile)
// 2. Избројте колку зборови има во текстот.
// 3. Избројте колку реченици има во текстот.
// 4. Избројте колку карактери има во текстот.
// 5. Избројте колку зборови имаат помалку или еднакво на 5 карактери.
// 6. Избројте колку зборови имаат повеќе или еднакво на 7 карактери.
// 6. Избројте колку зборови имаат точно 6 карактери.
// Отпечатете ги резултатите.

// string.split(...), string.length, for(...)
