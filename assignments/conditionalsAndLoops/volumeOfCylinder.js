// Calculate volume of cylinder

let height = 10;
let radius = 5;
let volume = null;
if(height && radius){
    volume = (radius*radius*height)*22/7;
    console.log(volume.toFixed(3));
}
else{
    console.log("Missing required measurement..!");
}