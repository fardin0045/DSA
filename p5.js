
//Reverse a String 
const reverseString = (str) => str.split('').reverse().join('');
console.log(reverseString('hello'))


//Palindrome or not 
const palindrome = (str) => {
    const rev = str.split('').reverse().join('');

    if (str === rev) {
        return "Palindrome";
    } else {
        return "Not Palindrome";
    }
};
console.log(palindrome('hello'))

//Int Reverse 
const palindrome1 = (str) => str.toString().split('').reverse().join('');

console.log(palindrome1(4321))

//Capitalize 
const uppercase = (str) => {
    const rev = str.toLowerCase().split(" ").map(word=> word[0].toUpperCase() + word.slice(1)).join(" ");
    return rev;
};
console.log(uppercase('hello world'))

//Fizz Buzz challenge 
const fizzBuzz = (n) =>{
    for(let i = 1; i<= n; i++){
        
     if(i % 3===0 && i% 5===0 ) {console.log(i+ "- Fiz-Buzz" )}
        else if(i% 5===0){
            console.log(i+ "- Buzz")
        }else if(i% 3===0){
            console.log(i+ "- Fiz")
        }
    }
}
fizzBuzz(15)

//max profit 

const maxProfit = (prices) =>{
    let minPrice = prices[0];
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++){
       
        const currentPrice = prices[i]

        minPrice = Math.min(minPrice,currentPrice)
        const profit = currentPrice - minPrice
        maxProfit = Math.max(maxProfit, profit)
    }
    return maxProfit;
}

const prices = [7,0,5,3,6,4];
const profit = maxProfit(prices);
console.log("Max: ", profit)

const mul = prices.filter(m=> m>6)
console.log(mul);