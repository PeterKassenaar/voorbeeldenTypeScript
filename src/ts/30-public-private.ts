// 30-public-private.ts
// On using the keywords 'public' and 'private' in TypeScript.
// Again: namespace only here to prevent naming collisions.
namespace public_private {
	// 1. A property of a class is public by default.
	// No need to put the keyword 'public' in front of
	// the propertyname.
	// You CAN do so, if you want to be explicit, but it's not mandatory.
	// class Person {
	// 	name: string;
	// 	age: number;
	// }
	// const p = new Person();
	// p.name = 'Ronald';
	// console.log(p.name); // Ronald

	// //2. You can create a private modifier, like so:
	// class Person {
	// 	private name: string; // private member
	// 	public age: number; // obsolete/useless, it's public by default
	// }
	// const p = new Person();
	// p.name = 'Bram'; // Error : [ts] Property 'name' is private and only accessible within class 'Person'.
	// console.log(p.name); // it DOES work though, (unless 'noEmitOnError' flag is set)

	// 3. Automatic generation of properties
	// When used in the constructor of a class, TypeScript generates the properties for you.
	// You HAVE to use the keywords public/private in that case, otherwise they would
	// be just local variables
	class Person {
		constructor(public name?: string, public age?: number) {}
	}
	const p = new Person();
	p.name = 'Samantha'; // Works, as 'name' is automagically generated
	console.log(p.name);
	// 3a. This is the same as:
	// class Person {
	// 	name: string;
	// 	age: number;
	// 	constructor(name?: string, age?: number) {
	// 		this.name = name || null;
	//         this.age = age || null;
	//         // ...but the notation on using automatic generation of props is much shorter.
	// 	}
	// }
}
