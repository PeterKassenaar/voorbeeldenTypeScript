// 19-type-guard-instanceof.ts

namespace typeguard_instanceof {
  //************************************************** */
  // 1. simple example: what does instanceof actually do?
  class Foo {
    something() {}
  }
  const bar = new Foo();
  console.log('are bar and Foo of the same instance? :', bar instanceof Foo); // true (it compares the prototypes of both objects)
  //************************************************** */
  // 2. More real world-example: return the name of a class, passed in as a parameter of different types
  //   class Employee {
  //     constructor(public name: string, public age: string | number) {}
  //   }
  //   class DepartmentList {
  //     constructor(public title: string, public employees: Employee[]) {}
  //   }
  //     function getItemName(item: Employee | DepartmentList): string {
  //       //ugly solution, cast each item
  //       if ((item as Employee).name) {
  //         // apparently we're dealing with an Employee
  //         return (item as Employee).name;
  //       }
  //       // we're dealing with a DepartmentList
  //       return (item as DepartmentList).name;
  //     }
  //   const employeeName = getItemName(new Employee('Harry', 52));
  //   console.log('Employee Name: ', employeeName);
  //   const departmentName = getItemName(
  //     new DepartmentList('Accounting', [
  //       new Employee('Astrid', 22),
  //       new Employee('Theo', 24)
  //     ])
  //   );
  //   console.log('Department Name:', departmentName);
  //************************************************** */
  // 3. Cleaner solution, use the instanceof Type Guard
  //   function getItemName(item: Employee | DepartmentList): string {
  //     // Nice solution, use instanceof operator
  //     if (item instanceof Employee) {
  //       // We're dealing with an Employee
  //       return item.name;
  //     }
  //     // we're definitely dealing with a DepartmentList
  //     return item.title;
  //   }
} // end namespace
