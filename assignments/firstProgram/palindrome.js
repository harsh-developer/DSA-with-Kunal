const ps = require("prompt-sync")
const input = ps({sigint: true})


// Check whether a number is palindrome or not

// var num = parseInt(input("Enter a number: "));
// var temp = num;
// var answer = 0;
// while(temp > 0){
//     var rem = temp%10;
//     answer = answer*10 + rem
//     temp = Math.floor(temp/10);
// }

// if(num === answer){
//     console.log(`${num} is a palindrome number.`)
// }
// else if (num != answer){
//     console.log(`${num} is a not palindrome number.`)
// }


//=================================================Another Approach=================================================//
// String method:- We have to give numeric input as string

// var num = input("Enter a number: ");
// var num = "121";
// for(let i = 0; i<num.length/2; i++){
//     if(num[i] != num[num.length - i - 1]){
//         console.log(`${num} is not a palindrome number!`)
//         break;
//     }
//     else{
//         console.log(`${num} is a palindrome number!`)
//         break;
//     }
// }


// Check whether a string is palindrome or not
// We can check for palindrom number as well by this method but we have to give number as string

var str = input("Enter a word: ");
for(let i = 0; i<str.length/2; i++){
    if(str[i] != str[str.length - i - 1]){
        console.log(`${str} is not a palindrome string!`)
        break;
    }else{
        console.log(`${str} is a palindrome string!`)
        break;
    }
}