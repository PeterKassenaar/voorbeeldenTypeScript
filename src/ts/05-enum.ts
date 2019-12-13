// Enum type

// basic
enum Gender {Male, Female, Transgender}

const gender = Gender.Female;
console.log('Gender: ', gender); // 1

// Custom numerics in enum type (=overrule default assignment of 1, 2, 3, etc).
enum  Color { Red = 10, Green = 20, Blue = 30}

const favoriteColor = Color.Blue;
console.log('Favorite color: ', favoriteColor); // 30

// find string name, based on value
const colorName: string = Color[favoriteColor];
console.log('Favorite color name: ', colorName); //  Blue

// constant enums - immutable and hardcoded compiled
const enum Brand {Mercedes, Ford, Ferrari}

const myBrand: number = Brand.Mercedes;
console.log('my Favorite brand: ', myBrand); // 0
