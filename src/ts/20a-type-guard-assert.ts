// type-guard-assert.ts
namespace typescript_typeguards {

    //************************************************** */
    // 1. Using the 'assert' operator in combination with 'is' as
    // the type predicate (see 20-typeguard-user-defined.ts)
    //************************************************** */

    // 2. Let's say our app has a helper function that
    // asserts some input is of type 'string'
    function assertIsString(val: any): asserts val is string{
        if(typeof val !== 'string'){
            throw new Error('This is not a string!')
        }
    }

    // 3. Calling/using the assertion function
    function sayHello(input : any){
        assertIsString(input);
        // we're definitely dealing with a string.
        // You can use the asserts guard to be very explicit.
        return `Hello ${input}!`
    }

    // 4. Using the sayHello(), which in turn uses the helper asserts guard
    console.log(sayHello('David')); // OK, since we're dealing with a string
} // end namespace
