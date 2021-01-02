// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount
// of USD as an integer, and the output should be a string that states the amount of Yuan followed
// by 'Chinese Yuan'

// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers shold be rounded to
//  the nearest hundredth (e.g. 21.00 NOT 21.0 or 21) (HINT: google toFixed)

const assert = require('assert');

const usdcny = (usd) => `${(usd * 6.75).toFixed(2)} Chinese Yuan`

console.log(usdcny())
//TESTS
assert.deepStrictEqual(usdcny(15), '101.25 Chinese Yuan');
assert.deepStrictEqual(usdcny(465), '3138.75 Chinese Yuan');