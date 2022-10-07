function interseciton(nums1, nums2){
    nums1 = nums1.sort((a,b) => a-b)
    nums2 = nums2.sort((a,b) => a-b)
    let i = 0;
    let j =0;
    let output = []
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] == nums2[j]){
            output.push(nums1[i])
            i++
            j++
        }else{
            i++
            j++
            continue
        }
    }
    return output;
}

let nums1 = [4,9,5], nums2 = [9,4,9,8,4]
console.log(interseciton(nums1, nums2))