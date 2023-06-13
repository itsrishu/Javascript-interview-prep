/* Write a function to deep copy an object */

const originalObject = {
	name: 'John',
	age: 30,
	address: {
		street: '123 Main St',
		city: 'New York',
	},
	hobbies: ['reading', 'coding'],
	friends: {
		r1: {
			name: 'John',
			hobbies: ['cricket', 'music'],
		},
		r2: {
			name: 'Milga',
			hobbies: ['footbal', 'music'],
		},
	},
}

function deepCopyAnObject(obj) {
	if (obj === null || typeof obj !== 'object') {
		return obj
	}

	let clone = {}

	for (const key in obj) {
		const value = obj[key]
		clone[key] = deepCopyAnObject(value)
	}
	return clone
}

const clonedObject = deepCopyAnObject(originalObject)

console.log(clonedObject, '11')
