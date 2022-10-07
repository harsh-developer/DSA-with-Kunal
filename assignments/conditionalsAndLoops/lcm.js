// calculate LCM of to numbers

let num1 = 84;
let num2 = 96;
let answer = null;
if (num1 > num2) {
    answer = num1;
} else {
    answer = num2;
}
while (answer <= num1 * num2) {
    if (answer % num1 == 0 && answer % num2 == 0) {
        break;
    }
    else {
        answer++
    }
}
console.log(answer)