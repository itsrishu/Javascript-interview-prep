/* Given an object and a filter function, write a function that will go through and filter the object, 
then return a filtered object */

const obj = {
	a: 1,
	b: {
		c: 2,
		d: -3,
		e: {
			f: {
				g: -4,
			},
		},
		h: {
			i: 5,
			j: 6,
		},
	},
}

const strObj = {
	a: 1,
	b: {
		c: 'Hello World',
		d: 2,
		e: {
			f: {
				g: -4,
			},
		},
		h: 'Good Night Moon',
	},
}

//{ a: 1, b: { c: 2, h: { i: 5, j: 6 } } }
//{ b: { c: 'Hello World', h: 'Good Night Moon' } }

function deepFilter(obj, func) {
	for (const key in obj) {
		let val = obj[key]
		if (typeof val === 'object' && !Array.isArray(val)) {
			deepFilter(val, func)
		} else {
			if (func(val) === false) {
				delete obj[key]
			}
		}

		if (JSON.stringify(val) === '{}') {
			delete obj[key]
		}
	}
	return obj
}

const filter = (n) => n >= 0

const strFilter = (s) => typeof s === 'string'

console.log(deepFilter(obj, filter))
console.log(deepFilter(strObj, strFilter))
