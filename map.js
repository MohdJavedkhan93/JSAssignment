// map() Method
// map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.
// map() does not execute the function for empty elements.
// map() does not change the original array.

let cars = [
  {
    color: "purple",
    type: "Ferrari",
    registration: new Date("2017-01-03"),
    cc: 4000,
  },
  {
    color: "red",
    type: "Audi",
    registration: new Date("2018-03-03"),
    cc: 3500,
  },
  {
    color: "brown",
    type: "Ford",
    registration: new Date("2018-03-03"),
    cc: 1500,
  },
  {
    color: "gray",
    type: "BMW",
    registration: new Date("2018-03-03"),
    cc: 3000,
  },
];

// map
const cc = cars.map((car) => car.cc);
console.log("36 =>", cc);

const modifiedArr = cars.map((car) => {
  return {
    ...car,
    speed: car.cc / 5,
  };
});
console.log("44 =>", modifiedArr);

const modifyArr = cars.map(({ type, cc, color }) => {
  return {
    type: type,
    cc: cc,
  };
});
console.log("52 =>", modifyArr);

const modifyarr = cars.map(({ type, cc, color }) => {
  return {
    type,
    cc,
    color,
  };
});
console.log("61 =>", modifyarr);
