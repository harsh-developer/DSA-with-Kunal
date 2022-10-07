// Calculate volume of sphere

let radius = 10;
let volume = null;
if(radius){
    volume = (radius*radius*radius)*22/7;
    console.log(volume.toFixed(3));
}
else{
    console.log("Missing required measurement..!");
}