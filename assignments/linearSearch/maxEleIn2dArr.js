// Find the maximum elemnt in 2d array

function maxEleIn2dArr(arr){
    let answer = arr[0][0];
    for(let row = 0; row<arr.length; row++){
        for(let col = 0; col<arr[row].length; col++){
            if(arr[row][col] > answer){
                answer = arr[row][col]
            }
        }
    }
    return answer;
}
console.log(maxEleIn2dArr([ [1, 2, 3], 
                            [4, 5, 6], 
                            [2, 6, 7], 
                            [10, 11]]))