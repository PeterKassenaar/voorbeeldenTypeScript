// type-guard-in.ts
namespace typescript_typeguards {

    //************************************************** */
    // 1. Using the 'in' operator to see if a property is available in a type
    // Here 'in' acts as the guard
    //************************************************** */

    // 2. Let's say our app defines some classes (or: interfaces, types, whatever)
    class Person {
        constructor(public name: string, public age: string | number) {
        }
    }

    class Employee {
        constructor(public company: string, public department: string) {
        }
    }

    // 3. The app creates a variable of a specific Type
    const Arjan = new Employee('Google', 'Development')

    // 4. Let's also say somewhere else in the app  we have a function, and we want to
    // check if the passed in variable is of type Person or Employee:
    function printPerson(person: Person | Employee): string {
        // HERE, we implement the Type Guard using 'in'
        if ('company' in person) {
            return 'We are dealing with an Employee!';
        }
        return 'We are dealing with a plain Person';
    }

    // 5. Check the actual variable
    console.log(printPerson(Arjan)); // We're dealing with an Employee
} // end namespace
