let str = "prajatantraismythbycountry"
let obj = {};
for(char of str){
    // obj[char] = obj.hasOwnProperty(char)? obj[char]+ 1 : 1;
    obj[char] = obj[char] ? obj[char] + 1 : 1;
}
console.log(obj)