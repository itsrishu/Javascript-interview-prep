/* You are asked to create a pipe() function, which chains multiple functions together to create a new function.

Suppose we have some simple functions like this

const times = (y) =>  (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) =>  (x) => x - y
const divide = (y) => (x) => x / y
Your pipe() would be used to generate new functions

*/

const pipe = (...fns) => {
	return (arg) => fns.reduce((acc, fn) => fn(acc, arg))
}
