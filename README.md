## Node Ecosystem

### Problem Domain
Create a module named arithmetic.js that exports two functions, sum and sub. Sum should take in two numbers, add them together, and return a single number result. Sub should also take in two numbers, subtract them, and return a single number result. If any of the provided arguments for either function is not a number, both should return null.

### Test cases
A total of four test cases are used here. The first two, which I'll refer to as "happy path", ensure that the return value of either of the functions provides the correct result. The second two test cases, referred to as "sad path", ensure that the return value is null in the event that one of the provided parameters is not a number.

### Technologies used
* JestJs
* Node
* Travis CI
* Eslint