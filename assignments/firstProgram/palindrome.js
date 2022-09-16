var num = 121;
var answer = 0;
while(num > 0){
    var rem = num%10;
    answer = answer*10 + rem
    num = Math.floor(num/10);
}
console.log(num);
// if(num === answer){
//     console.log(`${num} is a palindrome number.`)
// }
// else if (num != answer){
//     console.log(`${num} is a not palindrome number.`)
// }