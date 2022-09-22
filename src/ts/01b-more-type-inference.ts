namespace type_inference {
    // **********************
    // TypeScript mistake #2.
    // **********************

    // Opinion: 'use type inference where possible'

    // // 1. NO type information in this array, but its type can
    // furher on be inferred.
    const studentArray = [{
        name: 'Peter',
        gender: 'M'
    }, {
        name: 'Sandra',
        gender: 'F'
    }]

    // with explicit any, this works. However, we need 'any' (since we don't have
    // a Student type here) while its type can be inferred.
    const firstStudent: any = {...studentArray[0], name: 'Johan'};
    firstStudent.rank = 3;
    // firstStudent.age = 10; // OK, even if we don't WANT an 'age' field on this type.
    studentArray[0] = firstStudent;

    // With implicit type: type is inferred (the compiler KNOWS every
    // student has a 'name' and a 'gender'
    const firstStudentSpread = {...studentArray[0], rank: 1}
    // firstStudentSpread.age=10; // INVALID, because of the inferred type
    studentArray[0] = firstStudentSpread;

    console.log(studentArray[0]);

    /**
     * "In this case, the object destructuring with overriding a certain
     * field is really enough for TypeScript to infer the
     * firstStudendSpread variable precisely and to find out that
     * firstStudendSpread is type compatible with studentArray[0].
     * Sometimes removing 'any' will allow type inference to do all the job."
     *
     * Credits: https://medium.com/geekculture/typescript-advantages-common-mistakes-to-avoid-13ae5395dcc2
    * */
}
