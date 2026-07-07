
function areBracketsProperlyMatched(code_snippet) {
  // Write your code here
  let arr = [];
  let map = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let item of code_snippet) {
    if (item === '(' || item === '{' || item === '[') {
      arr.push(item); 
    } else if (item === ')' || item === '}' || item === ']'){
      if (arr.pop() !== map[item]) {
        return 0;
      }
    }
  }
  return arr.length === 0 ? 1: 0

}
 console.log(areBracketsProperlyMatched('if (a[0] > b[1]) { doSomething(); }'));
