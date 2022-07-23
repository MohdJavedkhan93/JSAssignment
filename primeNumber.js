const checkPrimeNum = (num) => {
    let text = false;
    // if(num === 0 || num === 1){
    //     text = true
    // }
    for(let i = 2 ; i <= num /2 ; i++){
        if(num % i === 0) { // 5%2 == 1
            text = true
        }
    }
    if(text === false) {
        console.log("Prime");
    }
    else {
        console.log("Not prime");
    }
};
// checkPrimeNum(17);


let count = 0;
for (let j = 2; j <= 100; j++) {
    for (let i = 1; i <= j; i++) {
        if (j % i == 0) 
        count++;
    }
    if (count == 2) 
    console.log(j);
    count = 0;
    }


//     var prime = function (){
// for (var num = 0; num < 101; num++){
//     if (num % 2 === 0){
//         break;
        
//     }
//     else if (num % 3 === 0){
//         break;
//     }
//     else if (num % 4=== 0){
//         break;
//     }
//     else if (num % 5 === 0){
//         break;
//     }
//     else if (num % 6 === 0){
//         break;
//     }
//     else if (num % 7 === 0){
//         break;
//     }
//     else if (num % 8 === 0){
//         break;
//     }
//     else if (num % 9 === 0){
//         break;
//     }
//     else if (num % 10 === 0){
//         break;
//     }
//     else if (num % 11 === 0){
//         break;
//     }
//     else if (num % 12 === 0){
//         break;
//     }
//     else {
//         return num;
//     }
// }
// };
// console.log(prime());