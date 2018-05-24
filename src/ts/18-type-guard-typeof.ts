// type-guard-typeof.ts
namespace typeguards {
  //************************************************** */
  // 1. Simple example, determining if a string or number is passed.
  function foo(bar: string | number) {
    if (typeof bar === 'string') {
      // do something, we KNOW it is a 'string' value
      // For instance, we get intellisense on all string methods
      return bar.toUpperCase();
    }
    // HERE, TypeScript KNOWS it should be a number value,
    // because we handled the string value above
    return bar.toFixed(2);
  }

  //************************************************** */
  // 2. More real life example, get the age from an employee, which can be
  // passed in as a string or a number.
  //   class Employee {
  //     constructor(public name: string, public age: string | number) {}
  //   }

  //   function getEmployeeAge(employee: Employee) {
  //     // HERE, we implement the Type Guard
  //   }

  //   const employeeAgeFromString = getEmployeeAge(new Employee('Dirk', '29'));

  //   console.log(employeeAgeFromString);

  //************************************************** */
  // 3. Implement the Type Guard in the function
  // class Employee {
  //   constructor(public name: string, public age: string | number) {}
  // }

  // function getEmployeeAge(employee: Employee): number {
  //   // HERE, we implement the Type Guard
  //   if (typeof employee.age === 'number') {
  //     return employee.age; // simply return it. It is already a number
  //   }
  //   return parseInt(employee.age); // convert to number, then return
  // }

  // const employeeAgeAsNumber = getEmployeeAge(new Employee('Dirk', '29'));

  // console.log(employeeAgeAsNumber);
  // console.log('type of employeeAgeAsNumber:', typeof employeeAgeAsNumber);
} // end namespace
