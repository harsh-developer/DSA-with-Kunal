// Calculate CSA (curved surface area) of cylinder

let height = 10;
let radius = 21;
let CSA = null;
if(height && radius){
    CSA = (2*height*radius)*22/7
    console.log(CSA);
}
else{
    console.log("Missing required measurement..!")
}