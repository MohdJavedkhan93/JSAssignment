const person = {
  name: "Javed",
  age: 29,
  hobby: "watching cinema",
};
// spread operator
let newperson = { ...person, address: "32/11" };
console.log(newperson);

// rest operator
const { age, ...otherProps } = newperson;
console.log(otherProps);
const { name, hobby, ...otherprop } = newperson;
console.log(otherprop);
