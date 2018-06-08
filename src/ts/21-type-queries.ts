//21-type-queries.ts
namespace type_queries {
	/*********************************** */
	// 1. Typeof operator in plain JavaScript
	console.log(typeof 123); // 'number'
	console.log(typeof 'this is a string'); // 'string'
	console.log(typeof [10, 20, 30]); // 'object'
	console.log(typeof {}); // 'object'

	/*********************************** */
	// 2. With TypeScript, the typeof operator acts slightly different
	// If you use it for type declarations, it's called a *Type Query*.

	// Lets say we have a anonymous type/object literal as such
	const employee = {
		name: 'Boris',
		age: 27
	};

	// we can now QUERY the employee object and assign it's properties
	// to the Person type.
	type Person = typeof employee;

	let person: Person = {
		name: 'Brandon',
		age: 9
	};

	// Or, using an inline syntax:
	let anotherPerson: typeof employee = {
		name: 'Sansa',
		age: 11
	};

	/*********************************** */
	// 3. get the keys, and therefore creating a UNION TYPE of the
	// keys in the Person type (which in turn are inherited from the employee anonymous object)

	//type PersonKeys = keyof Person; // PersonKeys is now a union type "name"| "age"

	// type PersonTypes = Person[PersonKeys]; // b/c we want to access the exact types of the 'name' and 'age' properties

	/*********************************** */
	// Demonstrate the power of generic types.
	// Create a type safe lookup, otherwise known as an Index Access Type
	/*********************************** */
	//
	// 4. Create a lookup function:
	//    ask for a property of an object

	// 4a. Old-skool ES5-function. This works, but in a type unsafe way.
	// function getProperty(obj: object, key: string) {
	// 	return obj[key];
	// }

	// 4b. TypeScript way, K is a *subtype* of T. It HAS to have the members of type T.
	// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
	// 	return obj[key];
	// }

	// const personName = getProperty(person, 'name'); // 'name' HAS to exsist in the other object, to work
	// console.log(personName); // 'Brandon'

	/*********************************** */
	// 5. Real life example, Sort an array on specific key,
	//  but make sure the key exists.
	/*********************************** */

	// 5a. Data
	// const personsArray: typeof person[] = [
	// 	{ name: 'Eddard', age: 45 },
	// 	{ name: 'Sansa', age: 11 },
	// 	{ name: 'Arya', age: 9 },
	// 	{ name: 'Robb', age: 15 },
	// 	{ name: 'Rickon', age: 4 },
	// 	{ name: 'Catelyn', age: 36 }
	// ];

	// // 5b. The orderBy helperfunction, using the Index Access Type notation.
	// function orderBy<T, K extends keyof T>(objArray: T[], prop: K): T[] {
	// 	return objArray.sort((obj1: T, obj2: T) => {
	// 		if (obj1[prop] > obj2[prop]) {
	// 			return 1;
	// 		} else if (obj1[prop] < obj2[prop]) {
	// 			return -1;
	// 		}
	// 		return 0;
	// 	});
	// }

	// // 5c. Implementation
	// const sortedPersons = orderBy(personsArray, 'name');
	// console.log(sortedPersons);
} // end namespace
