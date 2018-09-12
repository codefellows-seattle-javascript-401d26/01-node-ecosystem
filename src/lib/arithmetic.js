// Define arithmetic
var arithmetic = {};

arithmetic.add = function(variableA, variableB) {
  if(isNaN(variableA) || isNaN(variableB)) {
    return null;
  } else {
    return variableA + variableB;
  }
};

arithmetic.sub = function(variableA, variableB) {
  if( isNaN(variableA) || isNaN(variableB) ) {
    return null;
  } else {
    return variableA - variableB;
  }
};

console.log(arithmetic.sub(2, 3));
console.log(arithmetic.add(5, 6));

module.exports = arithmetic;
