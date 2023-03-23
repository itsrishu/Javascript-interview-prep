/* WRITE A FUNCTION TO FLATTEN AN OBJECT */

const obj = {
	A: 12,
	B: 8,
	C: {
		P: 23,
		O: {
			L: 56,
		},
		Q: [1, 2],
	},
}

function flattenObject(obj, prefix = '') {
	let result = {}
	for (let key in obj) {
		const value = obj[key]
		const newKey = prefix === '' ? `${key}` : prefix + '.' + key
		if (value !== null && typeof value === 'object') {
			let recursiveOutput = flattenObject(value, newKey)
			result = { ...result, ...recursiveOutput }
		} else {
			result[newKey] = value
		}
	}

	return result
}

console.log(flattenObject(obj))
