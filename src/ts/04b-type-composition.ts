namespace type_composition{
    // TypeScript Mistake #4.

    // Try to *compose* types that are similar and have (some fields
    // that are the same), instead of defining a new type with the same fields.
    // Extract a base type and derive (extend or intersect) from there.

    //**************** WRONG
    interface Customer {
        id: number,
        name: string,
        address: {
            city: string,
            state: string
        }
    }
    interface Address {
        city: string;
        state: string;
    }
    interface BankCustomer {
        id: number,
        name: string,
        address: {
            city: string,
            state: string
        },
        branchName: string,
        accountNo: number
    }
    // You'll notice the interface BankCustomer is just an extension of Customer,
    // with some extra information.
    // So a better way would be:

    //**************** RIGHT
    interface Customer2 {
        id: number,
        name: string,
        address: Address
    }
    interface Address2 {
        city: string;
        state: string;
    }
    interface BankCustomer2 extends Customer2 {
        branchName: string,
        accountNo: number
    }

    // Workshop: do the same, but now for a 'type' instead of an 'interface'.
}
