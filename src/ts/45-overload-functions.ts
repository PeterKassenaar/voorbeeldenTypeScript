namespace overload_functions {
    //* ************************************
    // 1. Let's say you want to build a function that aribrarily reverses
    // a string or a number or an array.
    //* ************************************

    // 2. Our function
    function reverse(value: string | number | any[]): string | number | any[] {
        // 3. Use a type guard
        if (typeof value === 'string') {
            // 4. We're dealing with a string. Reverse it:
            return value
                .split('')
                .reverse()
                .join('')
        }
        if (typeof value === 'number') {
            // 5. We're dealing with a number. First convert it to a string,
            // then reverse it (as seen above), then parse it back to a floating point number.
            // use Math.sign to retain the +/- value of the number.
            return parseFloat(
                value.toString()
                    .split('')
                    .reverse()
                    .join('')
            ) * Math.sign(value)
        }
        // 6. If the code ends up here, we're definitely dealing with an array
        // We can call the .reverse() object on an array directly.
        // BUT: using the .map() here (which does nothing), b/c we don't want
        // to alter the original array. .map() always returns a new array. We
        // could have used .slice() also.
        return value.map(x => x).reverse()
    }

    // 7. implementation
    console.log(reverse('Hello World'));
    console.log(reverse(-12345));
    console.log(reverse(['A', 'B', 'C', 'D', 'E']));


    // *****************************************
    // 8. Defining the overloads. Move these to ABOVE the function declaration,
    // otherwise you would get an error. But TypeScript can handle these overloads.
    // *****************************************
    // function reverse(value: string): string; // overload 1, accepting a string
    // function reverse(value: number): number; // overload 2, accepting a number
    // function reverse(value: any[]): any[]; // overload 3, accepting an array

    // 9. We can now also make use of Generics for the array.
    // function reverse<T>(value: string | number | T[]): string | number | T[] {
    //..
    // const myList: number[] = [1, 2, 3, 4, 5]
    // console.log(reverse(myList));
}
