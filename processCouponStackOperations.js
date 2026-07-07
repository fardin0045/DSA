function processCouponStackOperations(operations) {
  // Write your code here
  let n = operations.length;
  let arr = [];
  let minArr = [];
  let res = [];
  for (let operation of operations) {
    let [op, value] = operation.split(' ');

    if (op === 'push') {
      value = Number(value);
      arr.push(value);
      if (minArr.length === 0 || value <= minArr[minArr.length - 1]) {
        minArr.push(value);
      }
    } else if (op === 'pop' && arr.length > 0) {
      let remove = arr.pop();

      if (remove === minArr[minArr.length - 1]) {
        minArr.pop();
      }
    } else if (op === 'top' && arr.length > 0) {
      res.push(arr[arr.length - 1]);
    } else if (op === 'getMin' && arr.length > 0) {
      res.push(minArr[minArr.length - 1]);
    }
  }
  return res;
}
console.log(
  processCouponStackOperations([
    'push 2',
    'push 0',
    'push 3',
    'push 0',
    'getMin',
    'pop',
    'getMin',
    'pop',
    'top',
    'getMin',
  ]),
);

function deleteDuplicates(head) {
    // Write your code here
    for (let i = 0; i < head.length; i++){
        for(let j = i+1; j<head.length; j++){
            if( head[i] === head[j]){
                head.splice(j,1);
                j--
            }
        }
    }
    return head;
}
let head = [1, 2, 2, 2, 3, 4, 4, 5]
console.log(deleteDuplicates(head))