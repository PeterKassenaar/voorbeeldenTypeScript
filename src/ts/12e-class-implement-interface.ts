//******************************
// Classes - a class implementing an interface
//******************************
// 1. interface
interface IMessage_12e {
	sender: string,
	msg: string
}

// 2. class, implementing the interface
class Greeter_12e implements IMessage_12e {
	constructor(public sender: string, public msg: string) {

	}

	// method, defining the return type
	greet(): IMessage_12e {
		return {
			sender: this.sender,
			msg   : this.msg
		}
	}
}

// 3. Instantiate and log
let greeter_12e = new Greeter_12e('Peter', 'Hello World');
console.log(greeter_12e.greet());
