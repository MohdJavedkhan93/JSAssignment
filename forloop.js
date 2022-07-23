for (x = 1; x <= 10; x++) {
  console.log(x * 2);
}

var str = "1234";
let reverse = "";
for (var i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
  console.log(reverse);
}

var st = "javedkhan";
let reverse1 = st.split("").reverse1().join("");
console.log(reverse1);

var num = 5678;
str = num.toString();
var reverse2 = "";
for (var i = str.length - 1; i >= 0; i--) {
  reverse2 = reverse2 + str[i];
}
console.log(reverse2);

var no = 9876;
jak = no.toString();
var reverse3 = jak.split("").reverse3().join("");
console.log(reverse3);

//statement continue skip that condition which is given

for (i = 0; i <= 10; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

//break statement break the loop code when that number comes

for (x = 0; x <= 10; x++) {
  if (x == 7) {
    break;
  }
  console.log(x);
}

// let i = 5;
// for (let i = 0; i < 10; i++) {
// }
// console.log(i)

// var i = 5;
// for (var i = 0; i < 10; i++) {
// }
// console.log(i)

let khan = "";
for (let i = 0; i < 5; i++) {
  khan += "The number is " + i + "\n";
}
console.log(khan);

const cars = ["BMW", "Volvo", "Maruti", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "\n";
}
console.log(text);

// const cars = ["BMW", "Volvo", "Maruti", "Ford", "Fiat", "Audi"];

// let i =0;
// let text = ""
// let len = cars.length
// for (;  i < len; i++) {
//   text += cars[i] + "\n";
// }
// console.log(text)

// const cars = ["BMW", "Volvo", "Maruti", "Ford", "Fiat", "Audi"];

// let text, i, len;

// for (i=0, len=cars.length, text =""; i < len; i++) {
//   text += cars[i] + "\n";
// }
// console.log(text)

// let age;
//         for(age=0; age<=60; age++){
//             if(age<10)
//             console.log("you are child")
//             else if(age<18 && age>10) {
//                 console.log("you are teen")
//             }
//             else if (age>18 && age<40){
//                 console.log("you are young")
//             }
//             else if (age>40){
//                 console.log("you are moving towards old")
//             }

//         }

const loopingFor = () => {
  for (let num = 4; num <= 80; num++) {
    if (num % 4 == 0) {
      console.log("number devided by 4 is", num);
    }
  }
};

// loopingFor()
