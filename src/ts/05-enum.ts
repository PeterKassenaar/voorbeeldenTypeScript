// Enum type

// basic
enum Gender {Male, Female, Transgender}
var gender = Gender.Female;
console.log('Gender: ', gender); // 1

// Custom numerics
enum  Color { Red = 10, Green = 20, Blue = 30}
var favoriteColor = Color.Blue;
console.log('Favorite color: ', favoriteColor); // 30

// find string name, based on value
var colorName:string = Color[favoriteColor];
console.log('Favorite color name: ', colorName); //  Blue

// constant enums - immutable and hardcoded compiled
const enum Brand {Mercedes, Ford, Ferrari}
var myBrand:number = Brand.Mercedes;
console.log('my Favorite brand: ', myBrand); // 0