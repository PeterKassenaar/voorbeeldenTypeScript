// 22-mapped-types.ts
namespace mapped_types_readonly {
	// TypeScript Mapped Types:
	// Like a .map(): you iterate over something and change its value to something else.
	// With TypeScript this means: transforming one type in another type
	// * Readonly Mapped Type
	// * Partial Mapped Type
	// * Required Mapped Type
	// * Pick Mapped Type
	// * Record Mapped Type
	/*************************** */
	// 1. Readonly Mapped Type
	/*************************** */

	// 1a. Create an interface
	interface Employee {
		name: string;
		age: number;
	}

	// Somewhere else in our application, we might want to have
	// a readonly version of this interface. So? Create another
	// interface, right?
	interface ReadonlyEmployee  {
		readonly name: string;
		readonly age: number;
	}
	// 1b - create variables
	const employee: Employee = {
		name: 'Ronald',
		age: 31
	};

	// 1c. Suppose we want to make this immutable:
	console.log(employee.name = 'Robin'); // this works! But is undesirable

	// 1d. So, we create a function freezeEmployee()
	function freezeEmployee(employee: Employee): ReadonlyEmployee {
		return Object.freeze(employee); // (hover over .freeze() to see what type it returns!)
	}
	// this works as intended and expected:
	const newEmployee = freezeEmployee(employee);
	// newEmployee.name = 'Joanna'; // Error, b/c we made it readonly manually

	// 1e. Now Remove the return type ReadonlyEmployee on the freezeEmployee() function
	//     and hover over the newEmploy const. It's type is now Readonly<Employee>! This
	//     is actually a TypeScript Mapped Type in action. TypeScript infers
	//     the type based on Mapped Types (in TS since version 2.2). We can now
	//     remove the extra interface alltogether and everything still works!
	//     So Mapped Types save us a lot of boilerplate code!

	// 1f. Now, make it more generic and use it with Generics:
	// function freeze<T>(obj: T): Readonly<T> {
	// 	return Object.freeze(obj); //
	// }
	// const newEmployee = freeze(employee); // This works as intended and returns the correct type

	// 1g. Control+click on the Readonly<T> type to see what its definition looks like

	// 1h. So, if you want to mimic TypeScript and create your own readonly Mapped Type,
	//    you could write something like:
	// type MyReadonly<T> = {
	//     // essentially loop over every property in the type T, and return its readonly value:
	//     readonly [P in keyof T]: T[P]
	// }
	// // So this is completely valid to (but obsolete, since TypeScript provides this on its own)
	// function freeze2<T>(obj: T): MyReadonly<T> {
	// 	return Object.freeze(obj); //
	// }
	// const newEmployee2 = freeze2(employee);
	// newEmployee2.name = 'Chris';// error, b/c property is now readonly

	// But, of course it's easier letting TypeScript do the work for us:
	const newReadonlyEmployee: Readonly<Employee>={
		name: 'David',
		age: 43
	}
	// console.log(newReadonlyEmployee.name = 'John'); // Error, b/c of readonly<T>
}
