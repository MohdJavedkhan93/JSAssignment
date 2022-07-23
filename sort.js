// sort method()
// The sort() sorts the elements of an array.
// The sort() overwrites the original array.
// The sort() sorts the elements as strings in alphabetical and ascending order.

Arr = [0, 1, 3, 11, 0, 5, 0];
Arr.sort(function (a, b) {
  return a - b;
});
console.log(Arr);

Arr = [0, 1, 3, 11, 0, 5, 0];
Arr.sort();
console.log(Arr);

Array1 = [0, 1, 3, 11, 0, 5, 0];
Array1.sort();
Array1.reverse();
console.log(Array1);
