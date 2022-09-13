namespace conditional_types{

    //***************************
    // 8. Conditional Type, based on if-else logic
    //**************************
    // basetype 1
    type Diesel = {
        type: "petroleum" | "bio" | "synthetic"; // fuel types available to Diesel engines
    };

    // basetype 2
    type Gasoline = {
        type: "hybrid" | "conventional" | "unleaded"; // fuel types available to Gas engines
    };

    // derived type 1
    type Bus = {
        engine: Diesel; // so we KNOW a Bus variable has "petroleum" | "bio" | "synthetic"
    };

    // derived type 2
    type Car = {
        engine: Gasoline; // likewise we KNOW a Car uses  "hybrid" | "conventional" petrol
    };

    // Our Conditional Type
    // the type Engine is a Generic type that basically says "If the type
    // I get HAS an engine field, I don't care what its contents are (e.g. 'unknown').
    // I then return the contents of the "engine" field. If it doesn't
    // contain an engine, I return never."
    type Engine<T> = T extends { engine: unknown } ? T["engine"] : never;

    // The type, derived from the Engine Conditional Type.
    // The Engine is given a Bus type, which has an engine field (of type Diesel).
    // So we KNOW a BusEngine variable should have "petroleum" | "bio" | "synthetic" as fuel.
    type BusEngine = Engine<Bus>;

    // The actual Variable busEngine, of type BusEngine
    // Make sure you understand WHY "unleaded" is an invalid type for busEngine
    // const busEngine: BusEngine = {
    //     type: "unleaded" // INVALID!
    // };

    // CORRECT, as a Car engine accepts hybrid (see line 13)
    const carEngine: Engine<Car> = {
        type: "hybrid"
    };

    // INVALID, as "bio" is not a valid Gasoline type
    // const invalidEngine: Engine<Car> = {
    //     type: "bio"
    // };

    // This is where the "never" value comes in.
    type Bicycle = {
        power: "limbs";
    };

    // The noEngine type does NOT have a field "engine" and
    // therefore the Conditional Type Engine<T> on line 31 returns "never".
    type NoEngine = Engine<Bicycle>; // resulting type is 'never'

    // Hence, this is Invalid.
    // Only 'never' can be assigned to type 'never'
    // const noEngine: NoEngine = { type: "limbs" };


    //***************************
    // 9. Conditional Type, from the documentation, somehwat simpler
    // Credits: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
    //**************************
    interface Animal {
        live(): void;
    }
    interface Dog extends Animal {
        woof(): void;
    }

    type Example1 = Dog extends Animal ? number : string;
    // Here type Example1 == number

    type Example2 = RegExp extends Animal ? number : string;
    // Here type Example2 == string

    // Question. Given:
    interface Fish{
        blub(): void;
    }
    type Example3 = Fish extends Animal? Fish: Animal;
    // What would be the type of Example3?
}
