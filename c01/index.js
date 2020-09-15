console.log('hello world');

ime = 'Bojan';

var prezime = 'Gavrovski';
let godini = 38; // TODO: difference between var and let in javascript


const visina = 182;
// visina = 2; // pojavuva greshka

console.log(ime);

var b = 20;

function pero() {
    a = 10;
    console.log(a);
    console.log(b);
}

pero();

a = 'Janko';

console.log(a + 10);


// string
let str = 'Helloz!';
// number
let num = 3.14;
// boolean
let good = true;

// object
let student = {fname: 'Janko', lname: 'Jankovski', age: 20};
// array
let names = ['Janko', 'Petko', 'Stanko'];

// PASS BY VALUE
function changeSimpleVar(v) { // тука се предава самата *вредност* на променливата
    v = 'World';
    console.log(v);
}

changeSimpleVar(str);
console.log(str);


// PASS BY REFFERENCE
function changeObject(s) { // тука се предава *линк до променливата*, не нејзината вредност
    s.fname = 'Stanko';
    console.log(s.fname);
}

changeObject(student);
console.log(student.fname);






