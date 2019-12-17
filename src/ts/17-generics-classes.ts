// generics-classes.ts - comment in/out the sections in this file
namespace generics_class_example {
  //************************************************** */
  // 0. Set up some classes and some data.
  class Employee {
    constructor(public name: string, public age: number) {}
  }

  class Admin extends Employee {}

  class Manager extends Employee {}

  let admin = new Admin('Johan', 33);
  let manager = new Manager('Bart', 45);

  //************************************************** */
  // 1. No type information. This works, but gives you no type safety
  function echoEmployees(person) {
    return person;
  }

  let foo = echoEmployees(admin); // type of foo is now 'any'
  console.log(foo);

  //************************************************** */
  // 2. With Generic: now we have at least type information on property 'person'.
  // function echoEmployees<T>(person: T): T {
  //   return person;
  // }

  // let foo = echoEmployees(admin); // type of foo is now Admin, but still no type safety inside echoEmployees
  // let bar = echoEmployees(manager); // type of bar is correctly Manager
  // console.log(foo, bar);

  //************************************************** */
  // // 3. With Generic and Type Constraint: we have type safety inside the function
  // function echoEmployees<T extends Employee>(person: T): T {
  //   console.log('Name of the person: ', person.name);
  //   return person;
  // }
  //
  // let foo = echoEmployees(admin); // type of foo is now of type Admin, including type safety inside generic function.
  // let bar = echoEmployees(manager); // type of bar is Manager, including type safety
  // console.log(foo, bar);
}
