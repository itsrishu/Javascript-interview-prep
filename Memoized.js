/* Write a memoized function or a cached function */

function expensiveFunction(num1, num2) {
	for (let i = 0; i < 1000000; i++) {
		const element = array[i]
	}
	return num1 + num2
}

function memoizeFunction(func) {
	let results = {}
	return function (...args) {
		if (!results[JSON.stringify(args)]) {
			func.call(context || this, ...args)
		}
		return results[JSON.stringify(args)]
	}
}
