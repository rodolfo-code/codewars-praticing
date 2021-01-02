// The company you work for has just been awarded a contract to build a payment gateway.
// In order to help move things along, you have volunteered to create a function that will 
// take a float and return the amount formatting in dollars and cents.

// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your 
// function although you will need to account for adding trailing zeros if they are missing 
// (though you won't have to worry about a dangling period).

const assert = require('assert');

// Código
const formatMoney = (amount) => `$${amount.toFixed(2)}`


// Unit test
assert.deepStrictEqual(formatMoney(39.99), '$39.99')
assert.deepStrictEqual(formatMoney(27.70), '$27.70')