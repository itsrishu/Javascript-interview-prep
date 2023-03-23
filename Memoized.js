/* Write a memoized function or a cached function */

function expensiveFunction(num1, num2) {
	let y = 0
	for (let i = 0; i < 1000000; i++) {
		y = i * 1
	}
	return num1 + num2
}

function memoizeFunction(func, context = null) {
	let results = {}
	return function (...args) {
		const argsCache = JSON.stringify(args)
		if (!results[argsCache]) {
			results[argsCache] = func.call(context || this, ...args)
		}
		return results[argsCache]
	}
}

const result = memoizeFunction(expensiveFunction)

console.time('first call')
console.log(result(123, 911))
console.timeEnd('first call')
console.time('second call')
console.log(result(123, 911))
console.timeEnd('second call')
