namespace wrapper_objects {

    // **********************
    // TypeScript mistake #3.
    // **********************

    /*
    In Javascript, we have primitives types such as string, number.
     We also have wrapper types such as String, Number (note the uppercase character).
     What should we use? See example below:
    * */

    // 1. Correct
    const primitiveFn = (name: string) => {
        console.log(name);
    }

    // 2. Wrong, but it works.
    const WrapperFn = (name: String) => {
        console.log(name);
    };
    // 3. no difference in output
    primitiveFn("Hello World")
    WrapperFn("Hello World")

    // So, These BOTH WORK! However, the first option is better.

    /*
    ****** 'String' and 'string' are not equivalent. ********
    We should always avoid those uppercase types (wrapper objects)
    because they are just a Javascript-specific way to provide
    some methods on primitives.

    We usually don’t need and shouldn’t use them directly.
    * Credits: https://medium.com/geekculture/typescript-advantages-common-mistakes-to-avoid-13ae5395dcc2
    */

    // Workshop: check your own code base for 'String' vs. 'string'. Change it!
}
