namespace lookup_types{
    // **********************
    // TypeScript mistake #7.
    // **********************

    // NOT using a lookup type.
    // 1. Let's assume we have a complex type, possibly generated for us by tooling.
    type Employee = {
        info: {
            name: string;
            age: number;
            gender: string;
        },
        company:{
            name: string;
            department: string;
            city:string;
        }
        // ... more properties
    }

    // 2. We can now create a lookup type that uses properties from the original type,
    // without us having to repeat ourselves and create additional types:
    type empInfo = Employee['info'];
    type empCompany = Employee['company'];

    // 3. In the actual variables we get intellisense and errors if we don't exactly
    // match the contents of the lookup type.
    const employee :empInfo = {
        name: 'Derrick',
        age: 54,
        gender: 'M'
    };
    const company : empCompany ={
        name: 'Microsoft',
        department: 'Development',
        city: 'Redmond, WA'
    }

    // 4. So the win here is that we don't have to (re)create different types, we
    // can create variables with a part of all the information and
    // we can compose employee-variables that have all the information.

    // workshop: check your own code if you can improve and use lookup types.
}
