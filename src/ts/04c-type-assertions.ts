namespace type_assertions {
    // **********************
    // TypeScript mistake #6.
    // **********************

    // Please, use Type Declarations instead of Type Assertions.
    // Example:
    type Employee = {
        name: string;
        gender: string;
    }

    // There is a HUGE difference in these two statements:
    const Peter: Employee = {name: 'Peter', gender: 'M'};
    const Sandra = {name: 'Sandra', gender: 'F'} as Employee;

    ;
    // In the first variant, we TELL the compiler that a constant is
    // of a specific type. TypeScript checks beforehand of the properties match.

    // In the second variant, we basically define an 'any' type and AFTERWARDS
    // tell TypeScript that he should treat it as an Employee. This is a bit better
    // than using 'any' in the first place, but the first example is best.

    // It MIGHT end up going all right, but 'better safe than sorry'.

    // Workhop: check your code on occurences.
}
