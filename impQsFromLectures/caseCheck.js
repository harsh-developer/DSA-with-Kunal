// Check if a enter character is of lower case or UPPER CASE

const ps = require("prompt-sync");
const input = ps({sigint: true});

var char = input("Enter an alphabet: ")
if(char.length == 1 && char >= "a" && char <= "z"){
    console.log("lower case");
}
else if( char.length == 1 && char >= "A" && char <= "Z"){
    console.log("UPPER CASE");
}
else{
    console.log("Please enter valid input!")
}