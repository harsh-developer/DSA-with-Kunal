function maximumWealth (accounts) {
    let maxIncome = 0;
    let n = accounts.length;
    let m = accounts[0].length
    for(let i = 0; i<n; i++){
        // We need to define sum here, because everytime when i will increase sum should resign to 0 
        let sum = 0 
        for(let j = 0; j<m; j++){
            sum = sum + accounts[i][j]
            if(sum > maxIncome){
                maxIncome = sum;
            }
        }
    }
    return maxIncome;
};
console.log(maximumWealth([[1,2,3],[3,2,1]]))