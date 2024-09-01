let x = 10;
let y = 3;

// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);
// console.log(x**y);

// increment 

// console.log(x++);
// console.log(++x);


// x = x +5;
// x =+ 5;
// x *= 5;

// relational operators
// will return true or false
console.log(x > 0);
console.log(x >= 1);

// strict equality operator
console.log(x === 0);
console.log(x !== 1);


console.log(1 === 1);  // true
console.log('1' === 1); // false


// lose equality operator
console.log(x == 0);

console.log(1 == 1);
console.log(1 == '1');
console.log(1 == true)
// both are true
// the computer will look at the left and switch the right side type to the same 
// as the one in the left







let points = 100;
let type = points > 100 ? 'gold' : 'silver';
let age = 22;
let d = age > 21 ? 'Old enought to drink' : 'Too young to drink';


console.log(true && true);

console.log(true && false);

let highIncome = true;
let goodCredit = true;

console.log(highIncome && goodCredit);
console.log(highIncome || goodCredit);


let userColor = undefined;
let defaultColor = 'Blue';

console.log(userColor || defaultColor);



console.log(1 | 2); // 3
console.log(1 & 2); // 0


const readPermission = 4;
const writePermission = 2;

const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);













