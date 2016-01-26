interface IPerson {
	firstName: string;
	lastName: string;
	email:string;
	age?: number
}

class InterfacePerson implements IPerson {

	constructor(public firstName:string,
				public lastName:string,
				public email:string) {
	}

	// OF : implementeer de interface als een options-object in de constructor
	//firstName:string;
	//lastName:string;
	//email:string;
	//age:number;
	//
	//constructor(personOptions:IPerson) {
	//	this.firstName = personOptions.firstName;
	//	this.lastName  = personOptions.lastName;
	//	this.email     = personOptions.email;
	//	this.age       = personOptions.age;
	//}

	greet() {
		return `Hello ${ this.firstName} ${this.lastName},
			your email address is ${this.email}.`
	}
}

// optie 1:
var interfacePerson = new InterfacePerson('Peter', 'Kassenaar', 'info@kassenaar.com');
//Optie 2:
// var interfacePerson = new InterfacePerson({firstName: 'Peter', lastName: 'Kassenaar', email: 'info@kassenaar.com'});
console.log(interfacePerson);
document.getElementById('result').innerHTML = interfacePerson.greet();