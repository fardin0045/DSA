const num = [1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9];

function findPairs(arr){
    for (let i = 0; i<arr.length; i++){
        for(let j = i +1; j< arr.length; j++){
           for(let k = j+1; k< arr.length; k++){
             console.log(`${arr[i]}-${arr[j]}-${arr[k]}`)
           }
        }
    }
}

findPairs(num)