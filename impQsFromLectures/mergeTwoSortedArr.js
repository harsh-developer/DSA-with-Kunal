function merge(nums1, m, nums2, n) {
    let output = [];
    let i = 0;
    let j = 0;
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            output.push(nums1[i]);
            i++
        }
        else {
            output.push(nums2[j]);
            j++
        }
    }
    while (i < m) {
        output.push(nums1[i]);
        i++
    }
    while (j < n) {
        output.push(nums2[j])
        j++
    }
    return output;
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))