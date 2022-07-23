// filter method()
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

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
const filteredcars = cars.filter((car) => {
  return car.cc > 1500;
});
console.log("35 =>", filteredcars);

const filteredCars = cars.filter((car) => car.cc == 1500);
console.log("38 =>", filteredCars);

const filter = cars.filter((car) => car.color == "red");
console.log("41 =>", filter);


let checkMyName=(name, age)=>{
  console.log(`${name} your age is ${age}`)
  console.log(name, "your age is",age)
}
checkMyName("Parvez", 27)

// Parvez your age is 27
