interface IPersonFn {
	firstName: string;
	lastName: string;
	email:string;
	age?: number;
	fullName:() => string; // function on the interface. No parameters, returns a string
}

class InterfacePersonFn implements IPersonFn {
	constructor(public firstName:string,
				public lastName:string,
				public email:string) {
	}


	fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	greet() {
		return `Hello ${ this.firstName} ${this.lastName},
			your email address is ${this.email}.`
	}
}

var interfacePersonFn = new InterfacePersonFn('Peter', 'Kassenaar', 'info@kassenaar.com');
console.log(interfacePersonFn);
document.getElementById('result').innerHTML = interfacePersonFn.greet();
document.getElementById('result').innerHTML += '<hr />Full name: ' + interfacePersonFn.fullName();