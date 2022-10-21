// return the length of substring that contains all unique characters

function maxWinSubstring(str) {
    let start = 0;
    let visited = new Map();
    let maxLen = 0;
    for(let i = 0; i<str.length; i++){
        if(visited.has(str[i])){
            if(start < visited.get(str[i]) + 1){
                start = visited.get(str[i]) + 1;
            }
        }
        visited.set(str[i], i);
        if(maxLen < (i - start  + 1)){
            maxLen = i - start + 1
        }
    }
    return maxLen;
}
console.log(maxWinSubstring("dvdf"));