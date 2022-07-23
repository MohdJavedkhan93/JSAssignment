//reduce method
const array = [1, 4, 9, 16];

const total = array.reduce((sum, value) => {
  return sum - value;
}, 0);
console.log("sum 7=>", total);

const newarray = array.reduce((sum, value) => {
  return sum - value;
});
console.log("sum 12 =>", newarray);

const numbers = [100, 100, 50, 20];
const reducenumber = numbers.reduce((sum, value) => {
  return sum - value;
});
console.log("sum 18 =>", reducenumber);

const reducenum = numbers.reduce((sum, value) => {
  return sum - value;
}, 0);
console.log("sum 23 =>", reducenum);

const totalnumber = numbers.reduce(myFunc);
function myFunc(total, number) {
  return total - number;
}
console.log("totaal 30 =>", totalnumber);
