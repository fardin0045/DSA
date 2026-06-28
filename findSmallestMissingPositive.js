// Find the Smallest Missing Positive Integer
// Given an unsorted array of integers, find the smallest positive integer not present in the array in O(n) time and O(1) extra space.

function findSmallestMissingPositive(orderNumbers) {
    // Write your code here
    const arr = [];
    for(const num of orderNumbers){
        arr.push(num)
    }
    let smallest = 1;
    while( arr.includes(smallest)){
        smallest ++
    }
    return smallest;

}
console.log(findSmallestMissingPositive([3,4,-1,1]))

