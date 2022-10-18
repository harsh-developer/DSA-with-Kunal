// find the maximum element of an array

function maxEleOfArr(arr) {
    let answer = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > answer) {
            answer = arr[i]
        }
    }
    return answer;
}
console.log(maxEleOfArr([4, 2, 0, 12, -33, 4, -18, 77]))