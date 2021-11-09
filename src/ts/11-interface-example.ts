// our interface (i.e 'code contract')
interface IPerson {
    firstName: string;
    lastName: string;
    email: string;
    age?: number
}

// function to print the persons name
const printPerson = (person: IPerson): void => {
    const fullName = person.firstName + ' ' + person.lastName;
    console.log('Hello ' + fullName);
}
///......instantiate person, call printPerson();


//************************************************
// Class, implementing an interface
//************************************************
class InterfacePerson implements IPerson{

    // shorthand notation
    constructor(public firstName: string,
                public lastName: string,
                public email: string,
                public age? : number) {
    }

    // OR : implementeer de interface als een options-object in de constructor
    // firstName:string;
    // lastName:string;
    // email:string;
    // age:number;
    //
    // constructor(personOptions:IPerson) {
    // 	this.firstName = personOptions.firstName;
    // 	this.lastName  = personOptions.lastName;
    // 	this.email     = personOptions.email;
    // 	this.age       = personOptions.age;
    // }

    greet() {
        return `Hello ${this.firstName} ${this.lastName},
			your email address is ${this.email}.`
    }
}

const classPerson = new InterfacePerson('Luciano', 'Lastname', 'test@test.com');
console.log(classPerson.firstName);


// optie 1:
const interfacePerson = new InterfacePerson('Peter', 'Kassenaar', 'info@kassenaar.com');
//Optie 2:
// var interfacePerson = new InterfacePerson({firstName: 'Peter', lastName: 'Kassenaar', email: 'info@kassenaar.com'});
console.log(interfacePerson);
document.getElementById('result').innerHTML = interfacePerson.greet();
