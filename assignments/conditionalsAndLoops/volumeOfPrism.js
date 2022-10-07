// Calculate volume of prism
// Formula:- volume = B*h (where B is base area);

let height = 10;
let baseArea = null;
let baseLength = 5;
let baseBreadth = 4;
if(height && baseArea){
    let volume = height*baseArea;
    console.log(volume);
}
else if(height && baseLength && baseBreadth){
    baseArea = baseLength*baseBreadth;
    let volume = height*baseArea;
    console.log(volume);
}
else{
    console.log("Missing required measurement..!")
}