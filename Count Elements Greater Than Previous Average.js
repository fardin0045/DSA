function countResponseTimeRegressions(responseTimes) {
    // Write your code here
    let count = 0; // 0-1
    let sum = responseTimes[0];//100,300,450,750
    console.log(sum) //initial sum
    for(let i = 1; i < responseTimes.length; i++){
        let avg = sum/i
        if(responseTimes[i] > avg){
            count++;
           
        }
        sum += responseTimes[i]
        console.log(sum)
    }
    return count;

}

console.log(countResponseTimeRegressions([100,200,150,300,])) 