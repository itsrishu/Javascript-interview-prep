/*
    WHAT IS CURRYING?

    - function that takes one argument at a time and returns a new function expecting the next argument
    - conversion of functions from callable as f(a,b,c) into callable as f(a)(b)(c).

*/

/*
    WHY SHOULD CURRYING BE USED?

    - makes a function pure which makes it expose to less errors and side effects.
    - helps in avoiding the same variable again and again.
    - It's a checking method that checks if you have all the things before you proceed.
    - divides one function into multiple functions so that one handles one set of responsibility.

*/

/*
    HOW DOES CURRYING WORK?

    - Currying is a function that takes multiple arguments as input. .
    - transform the function into a number of functions where every function will accept one argument.

*/

/* SIMPLE FUNCTION */

function sum(a, b, c) {
	return a + b + c
}

//console.log(sum(3, 4, 5)) // 12

/* CURREID FUNCTION */

function curriedSum(a) {
	return function (b) {
		return function (c) {
			return a + b + c
		}
	}
}

//console.log(curriedSum(3)(4)(5)) // 12

/* INFINITE CURRYING */

// - Implememt a function that takes in n number of arguments and returns sum of the number

function add(a) {
	return (b) => {
		if (b) return add(a + b)
		else return a
	}
}

console.log(add(3)(4)(5)(8)(9)()) // 29
console.log(add(3)(4)(5)(8)(9)) // 29

// both are correct as a value is returned and not a function from add function

function addTwoNumber(a) {
	return function (b) {
		return a + b
	}
}

//add(2)(3)() // error

/* If you call add(2)(3)() with an empty set of parentheses at the end,
 you will get an error in JavaScript because the returned value from add(2)(3) is a function 
and cannot be called with an empty set of parentheses. */

// () at the end means the functions is executed and it will return a value since we are returning a value from the function.

/*  CURRYING vs PARTIAL APPLICATION */

// - currying is basically the number of returned functions is equal to the numbe of arguments it recieves
// - Partial application transforms a function into another function with smaller arity.

/* PARTIAL APPLICATION */

// - curriedSum recieves 3 arguments and hence returns 3 functions
// - but in case of partial application it recieves 3 arguments but returns only 2 functions

function x(a) {
	return (b, c) => {
		return a + b + c
	}
}

const y = x(3)
const i = y(9, 8)

//or

const p = x(3)(9, 8)

/* CONVERT A NORMAL FUNCTION INTO CURRIED FUNCTION */

function normalFunction(a, b, c) {
	return a + b + c
}

function curry(func) {
	return function curriedFunction(...args) {
		if (args.length >= func.length) {
			return func(...args)
		} else {
			return function (...next) {
				return curriedFunction(...args, ...next)
			}
		}
	}
}

//const test = curry(normalFunction)
//console.log(test)
