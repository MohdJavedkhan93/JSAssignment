const printAge = (age) => {
  switch (age) {
    case 10:
      console.log("You are child");
      break;
    case 20:
      console.log("You are teen age");
      break;
    case 30:
      console.log("You are young");
      break;
    default:
      console.log("You are out of age bound");
  }

  let newage = age;
  switch (true) {
    case newage <= 35:
      console.log("You Fail");
      break;
    case newage >= 36 && newage <= 60:
      console.log("Just pass");
      break;
    case newage >= 61 && newage <= 80:
      console.log("Good");
      break;
    default:
      console.log("Excelent");
  }
};
printAge(30);

let day = 5;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Sunday");
}

function fruittype(fruits) {
  switch (fruits) {
    case 1:
      console.log("oranges");
      break;
    case 2:
      console.log("apples");
      break;
    case 3:
      console.log("cherry");
      break;
    default:
      console.log("mangoes");
  }
}
fruittype(1);

let colortype = function (colors) {
  switch (colors) {
    case 1:
      console.log("red");
      break;
    case 2:
      console.log("green");
      break;
    case 3:
      console.log("blue");
      break;
    default:
      console.log("yellow");
  }
};
colortype(5);

let test = (newage) => {
  switch (true) {
    case newage < 10:
      console.log("you are child");
      break;
    case newage > 10 && newage < 18:
      console.log("you are teen");
      break;
    case newage > 18 && newage < 40:
      console.log("you are young");
      break;
    case newage > 40 && newage < 60:
      console.log("you are moving towards old");
      break;
    default:
      console.log("you are moving towards death");
  }
};
test(65);
