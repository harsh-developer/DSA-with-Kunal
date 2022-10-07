// Calculate sum of digits of a number

let number = 123400002;
let answer = 0;
while (number > 0) {
    let rem = number%10
    answer += rem;
    number = Math.floor(number/10);
}
console.log(answer);