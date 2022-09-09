namespace mapped_types_required{

    /*************************** */
    // 3. Required Mapped Type
    /*************************** */

    // 3a. This is actually the opposite of the Partial. All properties are required!
        // Create interface and constant as in the previous file
    interface Employee {
        name?: string;
        age?: number;
    }
    const employee: Employee = {
        name: 'Ronald'// this is now OK, as the props of Employee are optional
    };

    // All properties of Employee must now be given, as its type is Required<T>
    const newEmployee: Required<Employee> = {
        name: 'Suzanna',
        age: 27
    }
    console.log(newEmployee);
}
