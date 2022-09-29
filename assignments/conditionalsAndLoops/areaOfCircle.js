const ps = require("prompt-sync");
const input = ps({sigint: true});

var radius = parseFloat(input("Enter radius of circle: "))
var area = 3.14*radius*radius;
console.log(`Area of cicle having ${radius} radius is ${area}`);