//index.js

function calculatePower(number, power) {
    let result = number
    for(i=1; i < power; i++) {
      result *= number
    }

    return "the power of given number is :", result
}
  
module.exports = calculatePower