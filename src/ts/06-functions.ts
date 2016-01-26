//functions

// 1. Named functions in plain ES5
function add5(x, y) {
	return x + y;
}

// 2. Anonymous function in plain ES5
var add6 = function (x, y) {
	return x + y;
};

// no problem
console.log(add5(10, 20));
console.log(add6(30, 40));

// 3. Adding type to function definition
function add7(x:number, y:number):number {
	return x + y;
}
console.log(add7(50, 60));

// 4. Adding full type to anonymous function.
// This DOESN'T improve reading the code at great speed...
var add8:(x:number, y:number) => number =
		function (x:number, y:number):number {
			return x + y;
		};
console.log(add8(70, 80));


// 5. Lambda/arrow functions: write functions simpler
var addLambdaSimple = function (x:number, y:number):number {
	return x + y;
};
addLambdaSimple(10, 20);

// 6. Even simpler, by using the => syntax and no more 'function'
var addLambdaSimpler = (x:number, y:number) => x + y;
addLambdaSimpler(30, 20);