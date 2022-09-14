//********************
// Example on Strongly typing, one of the benefits of TypeScript.
// in Plain ES5-JavaScript - NO Advantages here!
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
// TypeScript - Strongly typed variables.
// We get development time errors if we use for example the wrong values for variables.
// Also see tsconfig.json - it has the simplest configuration/compilation settings possible.
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

// running this example?
// - In the browser: Open 'html/01-strong-typing.html'. It has a reference to the compiled JavaScript file.
// - In Node.js: cd to the correct directory (like 'cd src/js') and use command 'node 01-strong-typing.js'
