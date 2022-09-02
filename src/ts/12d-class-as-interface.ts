//******************************
// Classes - class acting as an interface
//******************************
// 1. class, acting as interface
class Person {
	constructor(public firstName: string,
				public lastName: string,
				public email: string) {
	}
}

// 2. class
class Employees {
	persons: Person[] = [];

	constructor() {
		this.persons = [
			new Person('Peter', 'Kassenaar', 'info@kassenaar.com'),
			new Person('Sandra', 'Kassenaar', 'sandra@kassenaar.com')
		]
	}

	// 2a. Method. Public by default
	getPersons(): Person[] {
		return this.persons;
	}
}

// 3. Instantiate and log
var employees = new Employees();
console.log(employees.getPersons()[0].firstName); // Peter
