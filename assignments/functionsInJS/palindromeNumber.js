// Write a function to find if a number is a palindrome or not. Take number as parameter.

function palindromeNumber(num){
    let temp = num;
    let expectedAnswer = 0;
    while(temp > 0){
        let rem = temp%10;
        expectedAnswer = expectedAnswer*10 + rem;
        temp = Math.floor(temp/10);
    }
    if(expectedAnswer == num){
        return `Yes, ${num} is a palindrome number!`
    }
    else{
        return `No, ${num} is not a palindrome number!`
    }
}
console.log(palindromeNumber(1201))