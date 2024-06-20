function add(...args) {
	const sum1 = args.reduce((acc, curr) => (acc += curr), 0)

	return (...argss) => {
		const sum2 = argss.reduce((acc, curr) => (acc += curr), 0)
		if (argss.length === 0) {
			return sum1
		} else {
			return add(sum1, sum2)
		}
	}
}

console.log(add(1)(2)(3)()) // Outputs: 6
console.log(add(1, 2)(3)()) // Outputs: 6
console.log(add(1, 2, 3)()) // Outputs: 6
console.log(add(4, 2)()) // Outputs: 6
