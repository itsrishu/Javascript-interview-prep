const _ = Symbol('placeholder') // Unique placeholder

function curry(func) {
	return function curried(...args) {
		// Check if enough arguments are provided and no placeholders exist
		const complete =
			args.length >= func.length &&
			!args.slice(0, func.length).includes(_)

		if (complete) {
			return func.apply(this, args)
		} else {
			return function (...newArgs) {
				// Replace placeholders in args with newArgs as they come in
				const mergedArgs = args.map((arg) =>
					arg === _ && newArgs.length ? newArgs.shift() : arg
				)
				return curried(...mergedArgs, ...newArgs) // Recurse for further arguments
			}
		}
	}
}

// Example usage:

function sum(a, b, c) {
	return a + b + c
}

const curriedSum = curry(sum)

console.log(curriedSum(1, _, 3)(2)) // Outputs 6
console.log(curriedSum(_, 2)(1)(3)) // Outputs 6
console.log(curriedSum(_, _, _)(1)(2)(3)) // Outputs 6
