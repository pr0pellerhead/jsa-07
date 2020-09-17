let a = 'Pero';
console.log(a);

var b = 'Janko';
console.log(b);

// console.log(c);
// let c = 'Stanko';

// var е ограничен од опсегот на функцијата
// let е ограничен од опсегот на блокот

function hello() {
    console.log('Hello');
}

const zdravo = () => {
    console.log('zdravo!');
};

const x = function() {
    console.log('hello X');
};

var pero = (i, j, cb) => {
    cb(i + j);
};

// pero(2, 3, d => console.log(d));
pero(2, 3, (d) => {
    console.log(d);
});

// константа = нејзината *вредност*
const to = () => console.log('timed out!');

// setTimeout(to, 5000);

// setTimeout(() => console.log('10 second timeout!'), 10000);

// setInterval(() => console.log('tic toc'), 1000);



const xfunc = () => {
    console.log('xfunc');
};

const yfunc = (i) => {
    // console.log(i);
    i();
};

let ime = 'Ivana';

yfunc(xfunc);

// конверзија од целзиусови степени во фаренхајтови степени
// конверзија од фаренхајтови во целзиусови степени

// c2f(123); // да врати 123 целзиусови степени конвертирани во фаренхајтови
// f2c(42); // да врати 42 фаренхајтови степени конвертирани во целзиусови



const g = () => {
    console.log('a');
};

const h = function(){
    console.log('a');
};

// TODO: what is the difference between a fat arrow function and a regular function in js


//  funkcija koja sobira dva broja pogolemi ili ednakvi na 0
const sobiranje = (a, b) => {
    return new Promise((success, fail) => { // success = resolve, fail = reject
        if(a >= 0 && b >= 0) {
            return success(a + b);
        } else {
            return fail('Numbers are not bigger than 0');
        }
    });
};

// sobiranje(2, -7)
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {  
//         console.error(err);
//     });

const af = async () => {
    try {
        let res = await sobiranje(3, -9);
        console.log(res);
    } catch(err) {
        console.error(err)
    }
};

af();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// 5 функции за конверзија (iso <-> imperial)
// km <-> mi
// kg <-> lb (pounds)
// l <-> galon
// ...

// домашната на Github!
// https://www.youtube.com/watch?v=GqNAD4XoZ6k

