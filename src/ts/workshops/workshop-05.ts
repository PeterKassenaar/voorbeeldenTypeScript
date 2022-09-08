// create the interface
import {IPerson, IPersonChild} from "./IPerson";

interface ICar{
    make: string;
    model: string;
    year: number;
    price: number;
}

// create a variable, based on the interface
const car1: ICar ={
    make:'Mercedes',
    model: 'GLS',
    price:100000,
    year:2022
}
console.log(car1);

// Optional - calling an API
let persons : IPersonChild[] = [];
const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
    .then((response:any) => response.json())
    .then((result:IPersonChild[]) => {
        persons = result;
        // log all retrieved persons
        console.log(persons);
        // Log only the first person, using TypeScript
        console.log('First person: ' + persons[0].name);
        console.log('her email: ' + persons[0].email);
    })
