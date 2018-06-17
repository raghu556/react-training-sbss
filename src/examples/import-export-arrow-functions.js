import isAdult from './es6-import-export'

console.log(name);
//var name = 'Amit';

console.log("isAdult: " + isAdult(25));
console.log("isSenior: " + isAdult(65));

const square = function(n) {
    return n * n;
}

console.log(square(5));

const squareArrow = (n) => n * n;
console.log(squareArrow(10));
