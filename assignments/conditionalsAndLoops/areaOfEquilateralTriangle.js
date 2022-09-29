// Calculate the area of equilateral triangle whose side is given
// Equilateral triangle means a1=a2=a3

let side = 10;
if(side){
    let area = (Math.sqrt(3)/4)*side*side
    console.log(area.toFixed(2));
}
else{
    console.log("Missing required measurement!")
}