// let num1 = 5;
// let num2 = 10;
// console.log("num1", num1)
// console.log("num2", num2)
// let temp = num1;
// num1 = num2;
// num2 = temp;
// console.log("num1", num1)
// console.log("num2", num2)

// for(let num=1; num<=10; num++){
//     console.log(3*num)
// }

// console.log(reverse)

var num = "rajmahal";
let reverse = "";
for (var i = num.length - 1; i >= 0; i--) {
  jak = reverse + num[i];
}
console.log(reverse);

// var num = 1234

// for(var i=num.length-1; i>=0; i--){
// num = num.split('')
// }
// console.log(num)

var num = 1234;
var num1 = 0;
let lastdigit;
while (num > 0) {
  lastdigit = num % 10;
  num1 = num1 * 10 + lastdigit;
  num = Math.floor(num / 10);
  console.log(num1);
}

// for (i=0; i<5; i++){
//     if(i=2){continue;

//     }
//     console.log(i)

// printName("javed");
//       function printName(name) {
//       console.log(name);
//        }

let printName = function (name) {
  console.log(name);
};
// printName("khan");

// let printName = (name) => {
//       console.log(name);
// };

//       printName("javed"); //calling

// var members = [
//   {
//     id: 111,
//     name: "Chelsea Foster",
//     position: "Intern",
//   },
//   {
//     id: 102,
//     name: "Aggie Sparling",
//     position: "Employee",
//   },
//   {
//     id: 123,
//     name: "Timmy Matthews",
//     position: "Intern",
//   },
//   {
//     id: 66,
//     name: "Emmet Foster",
//     position: "Employee",
//   },
// ];
// var allinterns = members.map((interns) => interns.position);
// console.log(allinterns);
// var allinterns = ["Intern", "Employee", "Intern", "Employee"];
// allinterns.sort();
// // console.log(allinterns)
// allinterns.shift();
// // // console.log(allinterns)
// allinterns.shift();
// // console.log(allinterns)
// var allinterns = ["Intern", "Intern"];

/*int main(){    
int n,r,sum=0,temp;    
printf("enter the number=");    
scanf("%d",&n);    
temp=n;    
while(n>0)    
{    
r=n%10;    
sum=(sum*10)+r;    
n=n/10;    
}    
if(temp==sum)    
printf("palindrome number ");    
else    
printf("not palindrome");   
return 0;  
} 

  function palindrome() {  
        var a, b, no, temp = 0;  
        no = "NITIN";  
        b = no;  
        while (no > 0)  
        {  
        a = no % 10;  
        no = no / 10;  
        temp = no*10 + a;  
        }  
        if (temp == b)  
        {  
        alert( "It is a Palindrome Number");  
        }  
        else  
        {  
        alert ("it is not a Palindrome Number");  
        }  
        }  


      var Arr = [0, 1,3,11,0,5,0]
Arr.sort()
// console.log(Arr)
// var Arr = [ 0, 0, 0, 1, 11, 3, 5 ]
Arr.splice(5,1)
// console.log(Arr)
// var Arr = [ 0, 0, 0, 1, 11, 5 ]
Arr.splice(4, 0, 3)
console.log(Arr)
