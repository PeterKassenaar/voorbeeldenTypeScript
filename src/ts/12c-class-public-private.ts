//******************************
// Classes - Public and private modifiers
//******************************
class HelloWorld_12c {
	// note: no property/field declaration here

	// constructor, w/ definition of public property
	constructor(public msg: string) {
		this.msg = msg;
	}

	// method. Public by default
	sayHello(): string {
		this.privateMesagge();
		return this.msg;
	}

	// private function. Not accessible from outside class
	private privateMesagge(){
		console.log(`This is from an internal function: ${this.msg} (private)`);
	}
}


var message = new HelloWorld('Hello World');
console.log(message.sayHello());

// ERROR: unresolved method or function, or: Property 'privateMessage' does not exist on type 'HelloWorld'.
// console.log(message.privateMessage());


// directly access public property;
console.log(message.msg + ' (from public property)');
