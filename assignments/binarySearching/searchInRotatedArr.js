// find the target element in an rotated array using binary search

function rotatedBinarySearch(arr, target) {
    let pivot = findPivot(arr);
    if (pivot == -1) {
        return binarySearch(arr, target, 0, arr.length - 1)
    }
    if (arr[pivot] == target) {
        return pivot;
    }
    if (arr[0] <= target) {
        return binarySearch(arr, target, 0, pivot - 1)
    }
    return binarySearch(arr, target, pivot + 1, arr.length - 1);
}

function findPivot(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        // case 1
        if (mid < end && arr[mid] > arr[mid + 1]) {
            return mid;
        }
        // case 2
        if (mid > start && arr[mid - 1] > arr[mid]) {
            return (mid - 1);
        }
        if (arr[start] <= arr[mid]) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return -1;
}

function binarySearch(arr, target, start, end) {
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] == target) {
            return mid;
        }
        else if (arr[mid] > target) {
            end = mid - 1
        }
        else {
            start = mid + 1;
        }
    }
    return -1;
}
console.log(rotatedBinarySearch([4, 5, 6, 7, 0, 1, 2], 6))