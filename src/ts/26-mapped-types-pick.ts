namespace mapped_types_pick {

    //***************************
    // 6. Pick<Type, Keys> Mapped Type
    //**************************

    // Our example, some interfaces (or types, whatever you want):
    interface Employee {
        name: string;
        age: number;
        address: {} // <== new property
    }

    // the variable pickedEmployee has a selection of keys from
    // the full (or: original) object. Of course you can turn
    // the properties 'name' | 'age' into their own Union Type.
    const pickedEmployee: Pick<Employee, 'name' | 'age'> = {
        name: 'Sandra',
        age: 20
    }

    // optional: do a console.log for yourself here

    // Background: the Pick<Type, Keys> actually looks like this:
    // Understand the notation K extends keyof T!
    type myPick<T, K extends keyof T> = {
        [P in K]: T[K]
    }
}
