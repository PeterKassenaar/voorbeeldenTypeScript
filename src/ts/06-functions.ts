// 06-functions.ts

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
const add8: (x: number, y: number) => number =
	function (x: number, y: number): number {
		return x + y;
	};
console.log(add8(70, 80));


// 5. Lambda/arrow functions: write functions simpler
const addLambdaSimple = function (x: number, y: number): number {
	return x + y;
};
console.log(addLambdaSimple(10, 20));

// 6. Even simpler, by using the => syntax and no more 'function' keyword
const addLambdaSimpler = (x: number, y: number) => {
	return x + y;
};
console.log(addLambdaSimpler(30, 20));
