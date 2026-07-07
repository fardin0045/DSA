function countAffordablePairs(prices, budget) {
  // Write your code here
  let count = 0
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] + prices[j] <= budget) {
        count++
      }
    }
  }
  return count
}
let prices = [1, 2, 3, 4, 5];
let budget = 7;
console.log(countAffordablePairs(prices, budget));