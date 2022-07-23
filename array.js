// 'fruits' array created using array literal notation.
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[3]);

//indexof
console.log(fruits.indexOf("Banana"));

//findIndex
console.log(fruits.findIndex((fruit) => fruit === "Oranges"));

// 'colors' array created using the Array() constructor.
let colors = new Array("Red", "Green", "Yellow");
console.log(colors);
console.log(colors.length);
console.log(colors[0]);

// 'fruits' array created using String.prototype.split().
let fruit = "Mango, cherry, Apple, Orange".split(", ");
console.log(fruit);
console.log(fruit.length);
console.log(fruit[1]);

//create a string from an array
//This example uses the join() method to create a string from the fruits array.

let name = ["javed", "salman", "pravinder"];
let namestring = name.join(" , ");
console.log(namestring);
// console.log(namestring.length);
// console.log(namestring[8])

// The index of an array's last element is always one
// less than the length of the array.
// fruits[fruits.length - 1]

// Find the index of an item in an array
const water = ["liqvid", "solid", "vapours"];
console.log(water.indexOf("vapours"));

//The includes() method determines whether an array includes a certain value
//among its entries, returning true or false as appropriate.

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// expected output: true

console.log(pets.includes("at"));
// expected output: false

const fish = ["whale", "shark"];
console.log(fish.includes("whale"));
// expected output: true
console.log(fish.includes("dolfin"));
// expected output: false

// [1, 2, 3].includes(2)         // true
// [1, 2, 3].includes(4)         // false
// [1, 2, 3].includes(3, 3)      // false
// [1, 2, 3].includes(3, -1)     // true
// [1, 2, NaN].includes(NaN)     // true
// ["1", "2", "3"].includes(3)   // false

// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97

// let arr = ['a', 'b', 'c']

// arr.includes('a', -100) // true
// arr.includes('b', -100) // true
// arr.includes('c', -100) // true
// arr.includes('a', -2)   // false
