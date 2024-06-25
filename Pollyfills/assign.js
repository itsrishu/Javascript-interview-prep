function objectAssign(target, ...sources) {
	if (target === null || target === undefined) {
		throw new Error()
	}

	if (typeof target !== 'object') {
		target = Object(target)
	}

	sources.forEach((obj) => {
		if (obj !== null && obj !== undefined) {
			Object.defineProperties(
				target,
				Object.getOwnPropertyDescriptors(obj)
			)
		}
	})
	return target
}

const key = Symbol('key')
const a = {
	[key]: 3,
	b: 4,
}
const target = {}
objectAssign(target, a)

console.log(objectAssign({}, { a: 3 }, null, undefined, NaN, 1, true, 1n))
