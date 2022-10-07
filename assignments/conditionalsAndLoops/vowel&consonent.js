// find if a given letter is vowel or consonent

let input = "i";
let allVowels = ["a", "e", "i", "o", "u"];
for(let i = 0; i<allVowels.length; i++){
    if(allVowels[i] == input){
        console.log(`${input} is vowel.`)
        break;
    }else if(allVowels[i] != input && i == allVowels.length-1){
        console.log(`${input} is consonent`)
        break;
    }
}