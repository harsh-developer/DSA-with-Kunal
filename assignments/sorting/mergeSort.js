function mergeSort(arr, start, end){
    if(start == end){
        return arr;
    }
    let mid = Math.floor(start + (end - start) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    return merge(arr, start, mid, end);
}

function merge(arr, start, mid, end){
    let arr1 = [];
    let arr2 = [];
    let lenArr1 = mid - start + 1;
    let lenArr2 = end - mid;
    for(let i = 0; i<lenArr1; i++){
        arr1[i] = arr[start + i];
    }
    for(let j = 0; j<lenArr2; j++){
        arr2[j] = arr[mid + 1 + j];
    }
    let a = 0;
    let b = 0;
    let c = start;
    while(a< lenArr1 && b < lenArr2){
        if(arr1[a] <= arr2[b]){
            arr[c] = arr1[a];
            a++
        }
        else{
            arr[c] = arr2[b];
            b++
        }
        c++;
    }
    while(a < lenArr1){
        arr[c] = arr1[a];
        a++;
        c++
    }
    while(b < lenArr2){
        arr[c] = arr2[b];
        c++
        b++
    }
    return arr;
}
let arr = [-10, 2, 7, 5, 3, 0, -18, 88, 99]
let start = 0;
let end = arr.length -1;
console.log(mergeSort(arr, start, end))