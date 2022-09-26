namespace mapped_types_extract {

    /*************************** */
    // 4. Extract<Type, Union> Mapped Type
    /*************************** */

    // From the docs:
    // type T0 = Extract<"a" | "b" | "c", "a" | "f">;
    // comment: Type T0 = "a"

    // Our example, some interfaces (or types, whatever you want):
    interface Employee {
        name: string;
        age: number;
    }

    interface Department {
        depName: string;
    }

    interface Company {
        city: string;
    }

    // We NEED a 'type' here, as an 'interface' can't be extracted.
    type Recipient = Extract<Employee | Department | Company, Employee>

    // we now KNOW Recipient is of type Employee, b/c of the extraction above.
    const recipient: Recipient = {
        name: 'Peter',  // therefore these props are required
        age: 30
    }

    /*************************** */
    // 5. Another example.
    // Here with string literals instead of custom types/interfaces
    // Credits: https://www.youtube.com/watch?v=eJ6R1knfsoc&t=1034s
    /*************************** */
    type Trip = {
        origin: {
            uuid: string;
            city: string;
            state: string;
        };
    } | {
        originUuid: string;
    };

    // What if the above type is generated for you
    // and you only want to use one of properties in Trip for your type?
    // Solution: extract the correct type out of the Trip type (which supposedly is generated for you by some CodeGen or something)
    // - First parameter: the type you want to extract from
    // - Second parameter: the type you want to match on

    type TripWithOriginRef = Extract<Trip, { originUuid: string }>;
    // TripWithOriginRef now has the signature of the second union type in Trip, b/c that is what is matched on.
    // so we KNOW TripWithOriginRef only has the originUuid property.

    type TripWithOriginWhole = Extract<Trip, { origin: { uuid: string } }>;
    // Here we have a match on the first union type, b/c that one has
    // a match with shape  { origin: { uuid: string }.
    // So we KNOW for sure that TripWithOriginWhole has the complete signature.

    const tripOriginRef: TripWithOriginRef = {originUuid: "123"}; // correct

    const tripOriginWhole: TripWithOriginWhole = { // correct. Check this for yourself!
        origin: {
            uuid: "123",
            city: "Denver",
            state: "Colorado"
        }
    };
    // optional: do a console.log() here for yourself, to check.
}
