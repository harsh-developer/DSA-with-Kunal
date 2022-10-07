// check if a number is palindrome or not

let num = 1221;
let temp = num;
let reversedNum = 0;
while(temp > 0){
    let rem = temp%10;
    reversedNum = reversedNum*10 + rem;
    temp = Math.floor(temp/10)
}
if(reversedNum == num){
    console.log(true);
}else{
    console.log(false);
}