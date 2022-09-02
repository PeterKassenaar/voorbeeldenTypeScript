//********************
// Plain ES5-JavaScript
//********************
let myVar;
myVar = 42;
myVar = '42';
myVar = {
    firstName: 'Peter',
    lastName: 'Kassenaar'
};
console.log('myVar is nu : ', myVar); // ALL valid!

//*************************
// TypeScript - Strongly typed variables
//*************************
let myVar1: number;
// myVar1 = 'Hello World '; // Error 'Assigned expression type string is not assignable to type number'
let myVar2: string;
let myVar3: Array<string>;
myVar3 = ['Roy', 'Ferry'];
let myVar4: Object;
myVar4 = {
    firstName: 'Peter',
    lastName: 'Kassenaar'
};
console.log('myVar4: ', myVar4);
