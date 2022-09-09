// a namespace, just to seperate it from the rest of the examples
namespace types_vs_interfaces {


    //***********************************
    // 1. We can create types and interfaces. What is the difference?
    //***********************************

    // 1a. A type with some properties.
    type Person = {
        name: string;
        age: number;
    }

    // 1b. Same properties, now in an interface.
    interface IPerson {
        name: string;
        age: number;
    }

    // 1c. Some variables, based on that type/interface
    const person1: Person = {
        name: 'Peter',
        age: 10
    }

    const person2: IPerson = {
        name: 'Sandra',
        age: 20
    }
    console.log('I\'m a person with a type: ', person1);
    console.log('I\'m a person with an interface: ', person2);
    console.log('There is no difference....');

    // 1d. Classes can implement both a type and an interface. Also no difference here.
    // class Peter implements Person{ // valid
    //     name: string;
    //     age: number;
    // }
    //
    // class Sandra implements IPerson{ // also valid
    //     name: string;
    //     age:number;
    // }
    //
    // const peter = new Peter();
    // peter.name='Peter' // works
    // console.log('class with a name property, based on a type: ' + peter.name);
    //***********************

    //***********************************
    // 2. Unique features of interfaces
    //***********************************

    // 2a. An interface can *extend* another interface
    // interface Peter extends IPerson{
    //     teacher: boolean;
    // }
    //
    // const me: Peter ={
    //     name: 'Peter',
    //     age: 10,
    //     teacher: true // of course we need this property now. Remove it and we have error
    // }
    //
    // console.log('Extended interface: ' , me);
    // // type Sandra extends Person{
    // //     // Simply not allowed. Types can not extend other types
    // // }
    //
    // // 2b. Interfaces support declaration merging
    // // So the properties of below interface are merged with the one above.
    // interface IPerson{
    //     city: string;
    // }
    // 2c. we now need to add the 'city' prop to the variable above.

    //***********************************
    // 3. Types
    //***********************************

    // 3a. A type *is* something, so you use the = sign
    // A type is therefore also called a 'type alias'.
    type Teacher = boolean;

    // 3b, now you can use the type as an alias
    const peter: Teacher = true; // valid
    // const peter: Teacher = 'true'; // <== error, wrong type (string vs boolean)

    // 3c. But, types can be more complex! See type tPerson
    // type tPerson ={
    //     name: string;
    //     age: number;
    // }
    // const sandra: tPerson ={
    //     name: 'Sandra',
    //     // age: 20 // <== error, 'Property age is missing in type(...)'
    // }

    // 3d. Intersection Types. Use the ampersand:
    // type Student = {
    //     student: boolean
    // }
    //
    // // type tPerson is *intersected* with type tStudent
    // type tPerson ={
    //     name: string;
    //     age: number;
    // } & Student
    //
    // // we need to use all the properties here, b/c of intersection type
    // const sandra : tPerson={
    //     name: 'Sandra',
    //     age: 20,
    //     student: true // <== ERROR when omitted. We now need ALL the props of the intersected types
    // }

    // 3e. Of course you can create additional types like so:
    // the ampersand (intersection), is pronounced AND
    // type Sandra = tPerson & Student;
    //
    // const mySandra: Sandra = {
    //     name: 'Sandra',
    //     age: 20,
    //     // student: true // <== ERROR when omitted. We now need ALL the props of the intersected types
    // }

    // 3f. Using a Union type, use the pipe sigen |
    // it is pronounced OR, so Sandra should be a tPerson OR a tStudent
    // type Sandra = Person | Student;
    // const mySandra: Sandra ={
    //     student:true
    // }
}
