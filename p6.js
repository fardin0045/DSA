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



// Find the Smallest Missing Positive Integer