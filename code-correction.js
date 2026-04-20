/*
Code Correction - Refactored & Enhanced Version
Author: Chris Haefner
*/

let customerName = "Alice";
let numberOfItems = 5;
let totalCost = 20;

// Additional variables for enhancement
let storeName = "Target";
let itemPrice = totalCost / numberOfItems;

// Main summary
let purchaseSummary = customerName + " bought " + numberOfItems + " items from " + storeName + " for $" + totalCost + ".";

// Extra detail
let priceBreakdown = "Each item costs $" + itemPrice + ".";

console.log(purchaseSummary);
console.log(priceBreakdown);
