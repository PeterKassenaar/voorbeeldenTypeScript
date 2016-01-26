// Typed parametersin Action

//plain ES5
function add1(num1, num2, num3) {
	return num1 + num2 + num3;
}
console.log(add1(10, 20, 'Hello World')); // works, but not as desired


// TypeScript:
function add2(num1:number, num2:number, num3:number) {
	return num1 + num2 + num3;
}
//console.log(add2(10, 20, 'Hello World')); // We get compile type error and notification in editor
console.log(add2(40, 50, 60)); // OK

// Or even more extensive :
function add3(num1:number, num2:number, num3:number):number {
	return num1 + num2 + num3;
}
console.log(add3(70, 80, 90)); // OK
