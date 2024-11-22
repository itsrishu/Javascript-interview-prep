/* You are asked to create a pipe() function, which chains multiple functions together to create a new function.

Suppose we have some simple functions like this

const times = (y) =>  (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) =>  (x) => x - y
const divide = (y) => (x) => x / y
Your pipe() would be used to generate new functions

*/

const pipe = (...fns) => {
	return function (args) {
		return fns.reduce(
			(acc, fn) => fn(acc),
			fns.reduce((acc, fn) => fn(acc, arg), args)
		)
	}
}

function compose(functions) {
	return function (initialValue) {
		return functions.reduceRight((acc, fn) => fn(acc), initialValue)
	}
}

const add1 = (x) => x + 1
const multiply2 = (x) => x * 2
const square = (x) => x * x

const composedFunction = compose([add1, multiply2, square])
console.log(composedFunction(3)) // Output: 49
