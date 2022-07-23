const person = {
  name: "Javed",
  age: 29,
  hobby: "watching cinema",
};
// for in
for (let key in person) {
  console.log(key);
}
// spread operator
newperson = { ...person, add: "32/11" };
console.log(newperson);

// for in
for (let value in newperson) {
  console.log(newperson[value]);
}
