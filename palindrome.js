var str = "1221";
let reverse = "";
for (var i = str.length - 1; i >= 0; i--) {
  reverse = reverse + str[i];
}
console.log(reverse);

if (reverse === str) {
  console.log("Given string is palindrome");
} else {
  console.log("Given string is not palindrome");
}
