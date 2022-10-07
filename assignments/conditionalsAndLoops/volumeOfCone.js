// Calculate the volume of cone

let radius = 5;
let height = null;
let length = 13;

if(!height){
    height = Math.sqrt(length*length - radius*radius)
    let volume = 1/3*(radius*radius*height)*22/7
    console.log(volume.toFixed(3));
}
else{
    let volume = 1/3*(radius*radius*height)*22/7
    console.log(volume.toFixed(3));
}