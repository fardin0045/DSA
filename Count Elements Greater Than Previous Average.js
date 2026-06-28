function countResponseTimeRegressions(responseTimes) {
    // Write your code here
    let count = 0;
    let sum = responseTimes[0];
    for(let i = 1; i < responseTimes.length; i++){
        let avg = sum/i
        if(responseTimes[i] > avg){
            count++;
        }
        sum += responseTimes[i]
    }
    return count;

}

console.log(countResponseTimeRegressions([100,200,150,300,])) 