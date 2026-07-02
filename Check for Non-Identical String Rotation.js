
function isNonTrivialRotation(s1, s2) {
    // Write your code here

    if(s1.length !== s2.length) return 0
    if(s1 === s2 )return 0
    return(s1 + s1).includes(s2)

    

}
// console.log(isNonTrivialRotation("abba","baba"))

// function isNonTrivialRotation(s1, s2) {
//     if (s1.length !== s2.length) return false;
//     if (s1 === s2) return false;

//     let arr = s1.split("");
//     console.log(arr)
//     for (let i = 0; i < arr.length - 1; i++) {
//         arr.push(arr.shift()); // Move first element to the end

//         if (arr.join("") === s2) {
            
//             return true;
//         }
//     }
//     return false;
// }

console.log(isNonTrivialRotation("abcde", "cdeab"));