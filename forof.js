let cars = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "red",
    type: "audi",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
  {
    color: "brown",
    type: "Ford",
    registration: new Date("2018-03-03"),
    capacity: 7,
  },
  {
    color: "gray",
    type: "Thar",
    registration: new Date("2018-03-03"),
    capacity: 6,
  },
];
// array iteration
for (let i = 0; i < cars.length; i++) {
  const vehicle = cars[i].type;
  console.log(vehicle);
}
for (let x = 0; x < cars.length; x++) {
  let car = cars[x].capacity;
  console.log("capacity", car);
}

//for of

for (let car of cars) {
  console.log("car-color", car.color);
  // console.log("car capacity", car.capacity);
  // console.log("car type", car.type);
  // console.log("car registration", car.registration);
}

// for in

// for (let car in cars) {
//   console.log(cars[car]); // cars[0]
//   // console.log();
// }

// map in js;
// cars.map((car) => {
//   console.log(car);
// });

const num = [2, 4, 6, 8, 10];
num.map((mjk) => {
  console.log(mjk);
});

let object = [{ a: 1, b: 2 }];
object.map((khan) => {
  console.log(khan);
});

let arr = [{ a: 1 }, { b: 2 }];
arr.map((jak) => {
  console.log(jak);
});

// for Each in js
num.forEach((jak) => {
  console.log(jak + 1);
});

// output [3, 5, 7, 9, 11]
