/* Write a memoized function or a cached function */

function expensiveFunction(num1, num2) {
	let y = 0
	for (let i = 0; i < 1000000; i++) {
		y = i * 1
	}
	return num1 + num2
}

const memoizeFunction = (func) => {
	let cache = {}
	return (...args) => {
		const stringifiedKey = JSON.stringify(args)
		if (stringifiedKey in cache) {
			return cache[stringifiedKey]
		}
		const result = func(...args)
		cache[stringifiedKey] = result
		return result
	}
}

const result = memoizeFunction(expensiveFunction)

console.time('first call')
console.log(result(123, 911))
console.timeEnd('first call')
console.time('second call')
console.log(result(123, 911))
console.timeEnd('second call')
