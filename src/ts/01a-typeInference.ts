// Type inference in Action

namespace type_inference {
// TypeScript infers the variable num and set its type to number.
    const num1 = 2;
    console.log('num is: ', num1);

// explicitly set the type of variable num 2
    const num2: number = 2;

// not setting a variable. It could be any type
    let any1;

// declare it, but no initialzation. It must be a number, however
    let num3: number;
//num3 = 'Hello World'; // invalid

// num4 is also of type number, because of type inference (num 1 is a number, we add 100, so num3 must be a number)
    const num4 = num1 + 100;

// this WILL work, because of implicit casting. Type Inferences denotes that str1 will be of type string.
    const str1 = num2 + 'Hello World';
    console.log(str1);


// this wil NOT work, due to explicit annotation. (" error TS2322: Type 'string' is not assignable to type 'number'.)
//let noGo : number = num2 + 'Hello World';

// defining arrays of a specific type
    let arr1: string[];
    let arr2: Array<string>; // (looks a lot like C# Generics)

}
