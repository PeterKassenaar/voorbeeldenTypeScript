// Any and Void type

// any
var iDontKnow:any;
iDontKnow = 'Hello World'; // just fine
console.log(iDontKnow);
iDontKnow = 40; // also just fine
console.log(iDontKnow);

// any can be used on mixed arrays:
var mixedArray : any[];
mixedArray=[1, 'Hello World', 2];
console.log(mixedArray[1]); // 'Hello world'
//mixedArray = 10; // TypeError: Type 'number' is not assignable to type 'any[]'.


// void - no return value
function warnUser(): void {
	console.log ("This is a warning in the console");
}
warnUser();