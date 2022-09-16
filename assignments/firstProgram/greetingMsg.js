const ps = require("prompt-sync");
const input = ps({sigint: true});

var name = input("Enter your name: ")
console.log(`${name}, keep growing and keep shining!`)