const factorial = (num) => {
  if (num < 0) {
    console.log("Negative number factorial doesn't exist");
  } else {
    let fact = 1;
    for (let i = num; i > 0; i--) {
      fact *= i; //(fact = fact * i) // 1 * 5 >>> 5 * 4 >>> 20 * 3 and so on till num gets 1
      // if (i === 1) {
      //   fact *= i;
      // } else {
      //   fact *= i + " * ";
      // }
    }

    console.log(`The Factorial of  ${num} : ` + fact);
  }
};
factorial(5);
