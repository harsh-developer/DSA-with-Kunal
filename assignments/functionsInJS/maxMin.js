// Define two functions to print the maximum and the minimum number
// respectively among three numbers entered by the user.

function maximum(a, b, c){
    if(a>b && a>c){
        return `${a} is the maximum number!`
    }
    else if(b > a && b>c){
        return `${b} is the maximum number!`
    }
    else if(c>a && c>b){
        return `${c} is the maximum number!`
    }
}

console.log(maximum(13, 25, 25));

function minimum(a, b, c){
    if(a<b && a<c){
        return `${a} is the minimum number!`
    }
    else if(b < a && b<c){
        return `${b} is the minimum number!`
    }
    else if(c < a && c < b){
        return `${c} is the minimum number!`
    }
}
console.log(minimum(2, 2, 23))