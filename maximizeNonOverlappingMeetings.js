function maximizeNonOverlappingMeetings(meetings) {
    // Write your code here
    console.log(meetings)
    meetings.sort((a,b)=> a[1] - b[1]);
    let count = 1;
    let lend = meetings[0][1];//2-3-4
    // console.log("sorted array: ",meetings)
    for(let i = 1; i < meetings.length; i++){
        let start = meetings[i][0] //10-2,20-1,30-3
        // console.log("start",start)
        let end = meetings[i][1] //11-3,21-3,31-4
        // console.log("end",end)
        if(start >=lend){ //2>=2
            count++;
            lend=end;

        }
    }
    // console.log(count)
    return count
    

}
console.log(maximizeNonOverlappingMeetings([[1, 2], [2, 3], [3, 4], [1, 3]]))