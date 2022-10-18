// find the minimum element of an array

function minimumElement(arr) {
    let answer = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < answer) {
            answer = arr[i]
        }
    } return answer;
}
console.log(minimumElement([4, 2, 0, 12, -33, 4, -18, 77]))