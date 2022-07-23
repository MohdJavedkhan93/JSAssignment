//statement continue skip that that which is given

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

var num;
for (num = 4; num <= 80; num++) {
  if (num % 4 == 0) {
    console.log("number devided by 4 is", num);
  }
}
