// generics-interface.ts - comment in/out the sections in this file
namespace generics_interface_example {
  //************************************************** */
  // 0. Set up soime interfaces and some data.
  interface Employee {
    name: string;
    age: number;
  }

  let admin: Employee = {
    name: 'Johan',
    age: 34
  };

  let manager: Employee = {
    name: 'Bart',
    age: 45
  };

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

  // let foo = echoEmployees(admin); // type of foo is now Employee, but still no type safety inside echoEmployees
  // console.log(foo);

  //************************************************** */
  // 3. With Generic and Type Constraint: we have type safety inside the function
  // function echoEmployees<T extends Employee>(person: T): T {
  //   console.log('Name of the person: ', person.);
  //   return person;
  // }

  // let foo = echoEmployees(admin); // type of foo is now of type Employee, including type safety inside generic function.
  // console.log(foo);
}
