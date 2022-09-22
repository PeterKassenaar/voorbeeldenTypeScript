namespace any_unknown{
    // **********************
    // TypeScript mistake #1.
    // **********************

    // Let's assume we use any and unknown for constants, like so:
    const numberAny: any = 10;
    const numberUnknown: unknown = 10;

    let msg1 : string = numberAny; // OK, because, 'any' is defined to work with any type, in any conditions and with any variable!
    // let msg2 : string = numberUnknown; // ERROR, 'unknown' is not assignable to type 'string'.

    // So with type 'unknown' we still get some sort of type checking. It doesn't assume that 'it will just work'.
    // Differences:
    // - type 'any' assumes the positive, 'it will probably work'. It's very forgiving, but doesn't stop you from making mistakes
    // - type 'unknown' assumes the negative and is much more cautious. 'It will probably not work'. And therefore is safer to use.

    // same goes with methods:
    // - 'any' will just assume that a given method exists on a variable
    // - 'unknown' will assume a given method DOES NOT exsist:
    numberAny.someMethod(); // OK, No intellisense (of course), but still OK as far as the compiler is concerned. Because its type is 'any'.
    // numberUnknown.someMethod(); // ERROR, because 'unknown' doesn's assume .someMethod() will exist on a variable. UNLESS you specify it yourself (but then it's not 'unknown' anymore, of course).

    // *******************
    // LESSON: Preferably use 'unknown' over 'any'!
    // *******************

    // Workshop: check your own code base for type 'any'. Preferrably switch it to 'unknown'.
    // Try to resolve errors you might get this way.
}
