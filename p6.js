//chunked array
const chunkedArr = (arr,size) =>{
    const chunked = [];
    let index = 0;

    while(index < arr.length){
        const chunk = arr.slice(index, index+size); //0 , 0+3 -- 0 index to before 3 index
        chunked.push(chunk);
        index += size;
        console.log(index)
    }
    return chunked;
}

console.log(chunkedArr([1,2,4,5,3,65,7,5],3))

//two sum 
const twoSum = (arr,sum) =>{
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === sum){
                return [i,j]
            }
        }
    }
    return []
}

const result = twoSum([1,2,5,5,3,6,6],11);
console.log(result);
function countResponseTimeRegressions(responseTimes) {
    // Write your code here
    let count = 0;
    let sum = responseTimes[0];
    for(let i = 1; i < responseTimes.length; i++){
        let avg = sum/i
        if(responseTimes[i] > avg){
            count++;
        }
        sum +=responseTimes[i]
    }
    return count;

}
console.log(countResponseTimeRegressions([100,200,150,300,]))

// Check Palindrome by Filtering Non-Letters
// Given a string containing letters, digits, and symbols, determine if it reads the same forwards and backwards when considering only alphabetic characters (case-insensitive).

function isAlphabeticPalindrome(code) {
    // Write your code here
    const org = code.toLowerCase().replace(/[^a-zA-Z]/g,"")
    const res = org.split("").reverse().join('')
    if(org === res){
        return 1;
    }
    else{
        return 0
    }

}
console.log(isAlphabeticPalindrome('Ab1ba32'))
// Find the Smallest Missing Positive Integer