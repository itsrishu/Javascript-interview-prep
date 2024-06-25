// reduce

// Array.prototype.myReduce = function myReduce(cb, ini) {
// 	let acc = ini
// 	for (let i = 0; i < this.length; i++) {
// 		acc = acc ? cb(acc, this[i], i, this) : this[i]
// 	}

// 	return acc
// }

// const exp = [2, 2, 3, 4]

// console.log(
// 	exp.myReduce((a, c) => {
// 		return (a += c)
// 	}, 0)
// )

// array.flat

// function myFlat(arr) {
// 	let result = []
// 	if (!arr.length) {
// 		return arr
// 	}

// 	if (!Array.isArray(arr)) {
// 		throw new TypeError('invalid arguments')
// 	}

// 	for (let i = 0; i < arr.length; i++) {
// 		const item = arr[i]
// 		if (typeof item === 'object' && Array.isArray(item)) {
// 			const resp = myFlat(item)
// 			result = [...result, ...resp]
// 		} else {
// 			result.push(item)
// 		}
// 	}
// 	return result
// }

// const exmp = [1, 2, 3, [7, [2, 8, [44, [4]]]], 3, [33, [9, [8, 3, 8, [9, 12]]]]]

//console.log(myFlat(exmp))

// for (let key in argObj) {
// 	const item = argObj[key]
// 	resp[key] = deepCloneAnObject(item)
// }

function deepCloneAnObject(argObj) {
	let resp = {}
	if (typeof argObj === 'object') {
		for (const key in argObj) {
			const item = argObj[key]
			if (typeof item === 'object' && item !== null) {
				resp[key] = deepCloneAnObject(item)
			} else {
				resp[key] = item
			}
		}
	}

	return resp
}

const exObj = {
	a: 1,
	b: {
		c: 2,
		k: { l: 0 },
	},
	z: 0,
}

console.log(deepCloneAnObject(exObj), '0000')
