// function accepts generic parameter. The character T is just a choice.
// Could also have been S, or R, or any other character. The 'T' is conveniently
// an abbreviation of 'Type'.
function echo<T>(arg: T): T {
	return arg;
}

let msg = echo('Hello world'); // msg is of type 'string'
console.log('using generic function echo() :::', msg);

let myNumber = echo(123); // myNumber is of type 'number
console.log('using generic function echo() :::', myNumber);
