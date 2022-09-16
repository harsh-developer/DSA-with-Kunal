const ps = require("prompt-sync");
const input = ps({sigint: true});

var a = parseInt(input("Enter a number: "))
if(a%2 == 0){
    console.log(`${a} is an even number!`)
}
else{
    console.log(`${a} is an odd number!`)
}