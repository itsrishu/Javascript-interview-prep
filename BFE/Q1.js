/* Please implement a curry() function, which accepts a function and return a curried one. */

//Here is an example

const join = (a, b, c) => {
	return `${a}_${b}_${c}`
}

function curry(fn) {
	return function curried(...args) {
		if (args.length >= fn.length) {
			return fn.apply(this, args)
		} else {
			return function (...moreArgs) {
				return curried.apply(this, args.concat(moreArgs))
			}
		}
	}
}

const curriedJoin = curry(join)

console.log(curriedJoin(1, 2, 3)) // '1_2_3'
console.log(curriedJoin(1)(2, 3)) // '1_2_3'
console.log(curriedJoin(1, 2)(3)) // '1_2_3'
