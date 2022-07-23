const printX = (x) => {
  while (x < 10) {
    x++;
    console.log(x);
  }
};

printX(5);
// ==============

const printY = () => {
  let y = 5;
  while (y <= 10) {
    y++;
    console.log("printing yyy ====> ", y);
  }
};
printY();

// 6-11

let z = 5;
while (z <= 10) {
  console.log(z);
  z++;
}
//5-10

var a = 15;
while (a >= 10) {
  a--;
  console.log(a);
}
//14-9

var b = 15;
while (b >= 10) {
  console.log(b);
  b--;
}
//15-10

var num = 1234;
var num1 = 0;
let lastdigit;
while (num > 0) {
  lastdigit = num % 10;
  num1 = num1 * 10 + lastdigit;
  num = Math.floor(num / 10);
  console.log(num1);
}

let n = 0;
let t = 0;
while (n < 3) {
  n++;
  t += n;
  console.log(t);
}
