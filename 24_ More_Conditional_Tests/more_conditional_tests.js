"use strict";
//Equality & Inequality Tests 1
console.log("Equality test with strings: ", "apple" === "apple");
//Equality & Inequality Tests 2
console.log("Inequality test with strings: ", "apple" != "orange");
// Tests using the lower case function
console.log("lower case function test: ", "HELLO".toLowerCase() === "hello");
//Numerical test involving equality
console.log("Equality test with numbers: ", 26 === 26);
//Numerical test involving Inequality
console.log("Inequality test with numbers: ", 26 != 35);
// Greater than and less than
console.log("Greater than test: ", 10 > 6);
//less than test
console.log("less than test: ", 5 < 10);
// Greater than and equal to test 
console.log("Greater than & equal to test: ", 10 >= 10);
//less than or equal to
console.log("less than or equal to: ", 10 <= 20);
//Test using "and" operator
console.log("And operator test: ", 5 === 5 && 10 > 5);
//Test using "Or" Operator
console.log("Or operator test: ", 10 === 10 || 10 > 5);
//Test whether an item is in a array
const fruits = ['apple', 'orange', 'strawberry'];
console.log('Test "apple" in the array: ', fruits.includes("apple"));
//Test whether an item is not in a array
console.log('Testing "bannana" is not in array: ', !fruits.includes("bannana"));
