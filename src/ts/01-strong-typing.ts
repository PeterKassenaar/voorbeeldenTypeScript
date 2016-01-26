//********************
// Plain JavaScript
//********************
var myVar;
myVar = 42;
myVar = '42';
myVar = {
	firstName: 'Peter',
	lastName : 'Kassenaar'
};
console.log('myVar is nu : ', myVar);

//*************************
// TypeScript - Strongly typed variables
//*************************
var myVar1:number;
// myVar1 = 'Hello World '; // Error 'Assigned expression type string is not assignable to type number'
var myVar2:string;
var myVar3:Array<string>;
var myVar4:Object;
myVar4 = {
	firstName: 'Peter',
	lastName : 'Kassenaar'
};
console.log('myVar4: ', myVar4);
