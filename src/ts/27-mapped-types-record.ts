namespace mapped_types_record {

    //***************************
    // 7. Record<Keys, Type> Mapped Type
    //**************************
    // Base type. Every employee has a name and an age.
    type Employee = {
        name: string;
        age: number;
    }
    // The names of our employees. These act as properties
    // when using Record<K, T> in the next line
    type EmployeeNames = "Peter" | "Sandra" | "Joris";

    // Our actual variable. The EmployeeNames act as
    // properties for the mapped type.
    const employees: Record<EmployeeNames, Employee> = {
        Peter: {name: 'Peter', age: 10},
        Joris: {name: 'Joris', age: 11},
        Sandra: {name: 'Sandra', age: 12}
    }

}
