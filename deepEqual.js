function deepEqual(a, b) {
	if (a === b) {
		return true
	}

	if (
		a == null ||
		typeof a !== 'object' ||
		b == null ||
		typeof b !== 'object'
	) {
		return false
	}

	if (Object.keys(a).length !== Object.keys(b).length) {
		return false
	}

	for (let key in a) {
		if (!b.hasOwnProperty(key) || !deepEqual(a[key], b[key])) {
			return false
		}
	}

	return true
}

// Examples with nested arrays and objects
const obj1 = { a: { b: 2, c: [1, 2, 3] }, d: 4 }
const obj2 = { a: { b: 2, c: [1, 2, 3] }, d: 4 }
const obj3 = { a: { b: 2, c: [1, 2, 4] }, d: 4 }

//console.log(deepEqual(obj1, obj2)) // true
//console.log(deepEqual(obj1, obj3)) // false

const arr1 = [1, [2, 3], { a: 4 }]
const arr2 = [1, [2, 3], { a: 4 }]
const arr3 = [1, [2, 4], { a: 4 }]

//console.log(deepEqual(arr1, arr2)) // true
// console.log(deepEqual(arr1, arr3)) // false

const complex1 = {
	x: [10, { y: 20, z: [30, 40] }],
	a: { b: { c: { d: [50, 60] } } },
}

const complex2 = {
	x: [10, { y: 20, z: [30, 40] }],
	a: { b: { c: { d: [50, 60] } } },
}

const complex3 = {
	x: [10, { y: 20, z: [30, 41] }],
	a: { b: { c: { d: [50, 60] } } },
}

console.log(deepEqual(complex1, complex2)) // true
console.log(deepEqual(complex1, complex3)) // false
