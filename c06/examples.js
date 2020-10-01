let iminja = ['Pero', 'Janko', 'Petko', 'Stanko'];

let c = iminja.map((ime, index) => {
    return `${ime} ${ime}vski`;
});

// console.log(c);
// console.log(iminja);

let f = iminja.filter((ime, index) => {
    // return ime[0] !== 'P';
    return index % 2 == 1;
});

// console.log(f);

// iminja.forEach((ime, index) => {
//     console.log(`[${index}] ${ime}`);
// });

let r = iminja.reduce((prev, curr) => {
    return `${prev} ${curr}`;
});

// console.log(r);

let broevi = [2, 1, 4, 3, 7, 6, 5, 10, 9, 8];

let res = broevi.reduce((prev, curr) => {
    return prev + curr;
});

// console.log(res);

let s = broevi.sort((a, b) => { // MUTABLE!
    if(a > b) {
        return 1;
    } else if(a < b) {
        return -1;
    } else {
        return 0;
    }
});

console.log(s);
console.log(broevi);