// search for an element in a 2D array and return its index

function searchElement(arr, target){
    for(let row = 0; row<arr.length; row++){
        for(let col = 0; col < arr[row].length; col++){
            if(arr[row][col] == target){
                return [row, col]
            }
        }
    }
    return [-1, -1];
}
console.log(searchElement([ [1, 2, 3], 
                            [4, 5, 6], 
                            [2, 6, 7], 
                            [10, 11]], 1))