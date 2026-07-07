function maximizeNonOverlappingMeetings(meetings) {
  // Write your code here
  console.log(meetings);
  meetings.sort((a, b) => a[1] - b[1]);
  let count = 1;
  let lend = meetings[0][1]; //2-3-4
  // console.log("sorted array: ",meetings)
  for (let i = 1; i < meetings.length; i++) {
    let start = meetings[i][0]; //10-2,20-1,30-3
    // console.log("start",start)
    let end = meetings[i][1]; //11-3,21-3,31-4
    // console.log("end",end)
    if (start >= lend) {
      //2>=2
      count++;
      lend = end;
    }
  }
  // console.log(count)
  return count;
}
// console.log(maximizeNonOverlappingMeetings([[1, 2], [2, 3], [3, 4], [1, 3]]))
var removeCoveredIntervals = function (intervals) {
  
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return a[0] - b[0];
  });

  let count = 0;
  let end = 0;

  for (let i = 0; i < intervals.length; i++) {

    if (intervals[i][1] <= end) {
      count++;
    } else {
      end = intervals[i][1];
    }
  }
  return intervals.length - count;
};
let intervals = [
  [1, 4],
  [3, 6],
  [2, 8],
];
// console.log(removeCoveredIntervals(intervals));
var addTwoNumbers = function(l1, l2) {
    let str1=l1.reverse().join("")
    let str2=l2.reverse().join("")
    const sum = Number(str1) + Number(str2);
    let res = sum.toString().split("").reverse()
    
    return res
};

console.log(addTwoNumbers([2,4,3],[5,6,4]))