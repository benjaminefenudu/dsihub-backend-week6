const { request } = require("express");

request.query // gets things back

// Differences between filter and forEach methods
// The main difference between forEach and filter is that forEach just loop over the array and 
// executes the callback but filter executes the callback and check its return value. 
// If the value is true element remains in the resulting array but if the return value is false 
// the element will be removed for the resulting array.

// Map like filter & foreach takes a callback and run it against every element on the array but 
// whats makes it unique is it generate a new array based on your existing array.

var sample = [1, 2, 3] // yeah same array
// es5

var result = sample.filter(function(elem){
    return elem !== 2;
})
console.log(result)
// es6
var result = sample.filter(elem => elem !== 2)
/* output */
[1, 3]