const ps = require("prompt-sync");
const input = ps({ sigint: true });

var number = parseInt(input("Enter a number: "))
var a = 0;
var b = 1;
var count = 2;
while(count <= number){
    var temp = b;
    b = a+b;
    a = temp;
    count++;
}
console.log(b);