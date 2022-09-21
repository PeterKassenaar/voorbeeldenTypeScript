namespace typescript_decorators {
// 90-decorators.ts

  // Example - pseudo code:
  // credits: https://www.digitalocean.com/community/tutorials/how-to-use-decorators-in-typescript
  // @classDecorator
  // class Person {
  //   @propertyDecorator
  //   public name: string;
  //
  //   @accessorDecorator
  //   get fullName() {
  //     // ...
  //   }
  //
  //   @methodDecorator
  //   printName(@parameterDecorator prefix: string) {
  //     // ...
  //   }
  // }


// Credits: https://stackoverflow.com/questions/29775830/how-to-implement-a-typescript-decorator
  class MyClass {
    @log // <== method decorator
    myMethod(arg: string) {
      return 'Message -- ' + arg;
    }
  }

  const message = new MyClass().myMethod('testing');
  console.log(message);

// *********************************
// This is the actual Decorator function
// *********************************
  function log(
      target: Object,
      propertyKey: string,
      descriptor: TypedPropertyDescriptor<any>
  ) {
    const originalMethod = descriptor.value; // save a reference to the original method

    // NOTE: Do not use arrow syntax here. Use a function expression in
    // order to use the correct value of `this` in this method (see notes below)
    descriptor.value = function (...args: any[]) {
      // pre
      console.log('The method args are: ' + JSON.stringify(args));
      // run and store result
      const result = originalMethod.apply(this, args);
      // post
      console.log('The return value is: ' + result);
      // return the result of the original method (or modify it before returning)
      return result;
    };

    return descriptor;
  }
}
