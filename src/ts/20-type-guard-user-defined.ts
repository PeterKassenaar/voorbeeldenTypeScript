// 20-type-guard-user-defined.ts
namespace type_guard_user_defined {
  //************************************************** */
  // 2. More real world-example: return the name of a class, passed in as a parameter of different types
  class Employee {
    constructor(public name: string, public age: string | number) {}
  }
  class DepartmentList {
    constructor(public title: string, public employees: Employee[]) {}
  }
  const employeeName = getItemName(new Employee('Sebastian', 36));
  console.log('Employee Name: ', employeeName);
  const departmentName = getItemName(
    new DepartmentList('Admin', [
      new Employee('Donnie', 28),
      new Employee('Joffrey', 29)
    ])
  );
  console.log('Department Name:', departmentName);

  function getItemName(item: Employee | DepartmentList): string {
    // Nice solution, use instanceof operator
    if (isEmployee(item)) {
      // We're dealing with an Employee
      return item.name;
    }
    // we're definitely dealing with a DepartmentList
    return item.title;
  }

  // Helper function: defer the type guard to a custom function
  function isEmployee(item: any): item is Employee {
    return item instanceof Employee;
  }
} // end namespace
