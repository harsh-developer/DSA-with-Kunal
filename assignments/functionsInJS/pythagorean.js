// Write a function to check if a given triplet is a Pythagorean triplet or not.

function checkPythagorean(a, b, c){
    if(a*a + b*b == c*c){
        return true;
    }
    else if(a*a + c*c == b*b){
        return true;
    }
    else if(b*b + c*c == a*a){
        return true;
    }
    return false;
}
console.log(checkPythagorean(17, 8, 15))