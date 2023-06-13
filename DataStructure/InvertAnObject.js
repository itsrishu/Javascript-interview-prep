/*
Given an object obj, we have to invert its key and value for each entries. Inversion will result in value being used as key and key as value.

Note:- There will be no repeated values to maintain the uniqueness.

Input: obj = {"age": 12, "name": "xyz", "hairColor": "black"}
Output: {"12": "age", "xyz": "name", "black": "hairColor"}
*/

function invertAnObject(obj) {
	let result = {}

	for (const [index, val] of Object.entries(obj)) {
		result = { ...result, [val]: index }
	}
	return result
}

console.log(invertAnObject({ age: 12, name: 'xyz', hairColor: 'black' }))
