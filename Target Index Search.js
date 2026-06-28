function binarySearch(nums, target) {
    // Write your code here
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target){
            return i
        }
    }
    return -1;

}
console.log(binarySearch([1,2,3,4,5],3))