//find
// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method returns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.

const array1 = [11, 5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);
console.log(found);

let array = [5, 15, 35, 65];
let newarray = array.find((num) => num > 30);
console.log(newarray);
