// calculate hcf of two numbers;

// let num1 = 24;
// let num2 = 18;
// let max = 0;
// let answer = null;
// if(num1 > num2){
//     answer = num2;
// }else{
//     answer = num1;
// }

// while(answer > 0){
//     if(num1%answer == 0 && num2%answer == 0){
//         break;
//     }else{
//         answer--
//     }
// } 
// console.log(answer)

function gcd(a, b) {

    // Everything divides 0
    if (b == 0) {
        return a;
    }

    return gcd(b, a % b);
}

console.log(gcd(0, 24))