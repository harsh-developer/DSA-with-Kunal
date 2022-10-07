// Print fibonacci series upto num

let num = 10;
let preNum = 0;
let currNum = 1;
let count = 2;
while(count <= num){
    console.log(preNum)
    let temp = currNum;
    currNum = currNum + preNum;
    preNum = temp;
    count++
}