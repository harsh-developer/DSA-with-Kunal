// Calculate perimater of parallelogram
// Rhombus means s1=s2=s3 but neither of angle is 90 degree


let side = 12;
let base = 10;
if(side && base){
    let perimater = 2*(side + base);
    console.log(perimater);
}
else{
    console.log("Missing required measurmeent..!")
}