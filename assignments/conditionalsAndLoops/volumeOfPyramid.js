// Calculate volume of pyramid

let baseLength = 10;
let baseWidth = 5;
let height = 12;
let volume = null;
if(baseLength && baseWidth && height){
    volume = (baseLength*baseWidth*height)/3;
    console.log(volume);
}
else{
    console.log("Missing required measurement..!")
}