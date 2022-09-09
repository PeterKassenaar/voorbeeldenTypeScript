// 23-mapped-types-partial.ts
namespace mapped_types_partial {

    /*************************** */
    // 2. Partial Mapped Type
    /*************************** */

    // Create interface and constant as in the previous file
    interface Employee {
        name: string;
        age: number;
    }
    const employee: Employee = {
        name: 'Ronald',
        age: 31
    };

    // 2a. Let's say you want to have a function that updates the properties of an employee.
    //   You could create a new interface and write a function something like:
    interface PartialEmployee {
        // both properties are optional now.
        name?: string;
        age?: number;
    }

    function updateEmployee(employee: Employee, property: PartialEmployee) {
        return {...employee, ...property}; // use the spread operator
    }

    console.log(updateEmployee(employee, {name: 'ABC'})); // this would work. You can't spell the property wrong, for example

    // 2b. The downside of this approach is of course that you have to maintain two interfaces.
    //   Solution: write your own Generic Partial Type, much like the approach before:
    // type MyPartial<T> = {
    // 	[// (note the question mark in the Type)
    // 	P in keyof T]?: T[P]
    // };

    // 2c. We can now use that MyPartial Type
    // function updateEmployee(employee: Employee, property: MyPartial<Employee>) {
    // 	return { ...employee, ...property }; // use the spread operator
    // }
    // updateEmployee(employee, { name: 'ABC' }); // this also works. You can't spell the property wrong, for example

    // 2d. But this is also build into TypeScript directly! It's called Partial<T>.
    //   You don't have to specify your own interface. So the function would become like this.
    // Using the Partial<T> here to update an employee with *only valid property names*
    // function updateEmployee(employee: Employee,
    //                         property: Partial<Employee>) : Employee {
    // 	return { ...employee, ...property }; // use the spread operator
    // }
    // console.log(updateEmployee(employee, { name: 'Brian' })); // works.
}
