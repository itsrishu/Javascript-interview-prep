/* WRITE A FUNCTION THAT TAKES TWO INPUTS NAMELY AN OBJECT AND A STRING 
AND RETURN THE VALUE FROM THE OBJECT BASED ON THE PATH FROM THE STRING */

// getObjectValue({ developer: 'Software Engineer' }, 'developer') // returns 'Software Engineer'
// getObjectValue({ developer: { first: 'John', last: 'Eric' } }, 'developer.first') // returns 'John'
// getObjectValue([{ developer: 'Tom' }, { count: [0, 1] }], '[1].count[0]') // returns 0
// getObjectValue([{ developer: 'Tom' }, [1, 1]], '[1][1]') // returns null

/* AWS FRONTEND INTERVIEW QUESTION */

function getObjectValue(obj, path) {
	path = path.split('[').join('.')
	path = path.split(']').join('')
	const keys = path.split('.').filter(Boolean)
	let current = obj
	for (const key of keys) {
		current = current[key]
		if (current === undefined) {
			return undefined
		}
	}
	return current
}

console.log(getObjectValue({ developer: 'Software Engineer' }, 'developer'))
console.log(getObjectValue({ developer: { first: 'John', last: 'Eric' } }, 'developer.first'))
console.log(getObjectValue([{ developer: 'Tom' }, { count: [0, 1] }], '[1].count[0]'))
console.log(getObjectValue([{ developer: 'Tom' }, [1, 1]], '[1][1]'))
