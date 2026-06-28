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