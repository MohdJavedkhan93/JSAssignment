// function method ares basically two types
//1st Arroy Function Method()
// let variable = () => {
// }
// variable()
// when single value is passed in arroy function
const printX = (x) => {
    while (x < 10) {
      x++;
      console.log("x==>",x);
    }
  };
  printX(5);

//when double value is passed in arroy function
const checkMyName = (name, age) => {
    console.log(name,"My age is",age)
    console.log(`${name} My age is ${age}`)
}
checkMyName("Javed", 29)
//outpoot Javed My age is 29

const sum = (x, y) => {
    return(x - y);
}
console.log(sum(15, 6))

//2nd function Method()
// function variable() {
// }
// variable()

//when single value passed in function method
function printY() {
    let y = 5;
    while (y <= 10) {
      y++;
      console.log("y==>", y);
    }
  };
  printY();


// when double value passed in function method
function num(x, y) {
    return(x + y);
}
console.log(num(4, 6))