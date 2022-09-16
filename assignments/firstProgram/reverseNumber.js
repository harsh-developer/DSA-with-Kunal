let number  = 250106;
let answer  = []
while(number > 0){
    let rem = number%10;
    answer.push(rem);
    number = Math.floor(number/10);
}
console.log(answer.join(""))


//==============================================Another approach==============================================//
// let answer = 0;
// while(number > 1){
//     let rem = number%10;
//     answer = answer*10 + rem;
//     number = Math.floor(number/10);
// }
// console.log(answer);