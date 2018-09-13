# arithmetic.js - custom add/subtract node module

This is very, very, simple node module. 

On the node module, there are two methods: add, subtract

## Getting Started

The methods both take two variables: variableA, variableB

### Prerequisites

The variables must be valid numbers. If they are NaN, the module methods will not run and return a null.

Good use:
```
arithmetic.sub(1, 3); // returns -2
```

Bad use:
```
arithmetic.sub("testing", 3); // returns null
```

### Installing

In order to use this module, simply copy and paste the code into a js file and require it in your code.


How to require at the top of your program:
```
// Dependencies
var addSubtract = require('./arithmetic.js');
```
## Running the tests

The testing system is very simple and built in. The methods will not run if they are not numbers.
