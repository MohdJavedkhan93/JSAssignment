//Object literal
const person = {
  name: "Javed Khan",
  age: 29,
};
console.log("person", person);
console.log("person", person.name);
console.log("person", person.age);
console.log("person.length", person.length);

const countries = new Array("India", "Bhutan");
console.log(countries);
console.log(countries[1]);

const person1 = {
  firstName: "M",
  lastName: "jkhan",
  age: 29,
  eyeColor: "grey",
};
console.log("person1", person1);
console.log("person1 keys", Object.keys(person1));
console.log("person1 values", Object.values(person1));

const newObj = {
  key1: "value1",
};
const newObj1 = new Object();
newObj1.key1 = "value1";
newObj1.key2 = "value2";
newObj1.key3 = "value3";
console.log("newObj", newObj);
// console.log("newObj1", object.keys(new Object()));

let person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 26,
  eyeColor: "blue",
};
let keys = Object.keys(person2);
let values = Object.values(person2);
console.log("person2", person2);
console.log("person2 keys", Object.keys(person2));
console.log("person2", Object.keys(person2).length);
console.log("person2 values", Object.values(person2));
console.log("person2", Object.keys(person2).length);
console.log("person2 keys", keys);
console.log("person2 values", values);

//for in
for (let key in person2) {
  console.log("person2 keys", key);
}
// for of
const persons = ["Kumar", "sharma", "Khan"];
for (let person of persons) console.log(person);

// for (let per of person2) {
//   console.log(person2);
// }
