// Search for an element in an infinite array (don't use length ot size of the array)

function ans(arr, target) {
    let start = 0;
    let end = 1;
    while (target > arr[end]) {
        let temp = end + 1;             // this is my new start
        end = end + (end - start + 1) * 2;
        start = temp;
    }
    return binarySearch(arr, target, start, end);
}

function binarySearch(arr, target, start, end) {
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] == target) {
            return mid;
        }
        if (arr[mid] > target) {
            end = mid - 1;
        }
        if (arr[mid] < target) {
            start = mid + 1;
        }
    }
    return -1;
}
console.log(ans([1, 2, 5, 6, 7, 8, 12, 14, 16, 18, 20, 25, 34, 37, 39, 40, 41, 44, 45], 12))