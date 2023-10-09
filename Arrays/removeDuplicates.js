/**
 * Remove duplicates from the array
 * @param {Array}
 */

const removeDuplicatesViaSet = (arr) => [...new Set(arr)]

const removeDuplicatesViaFilter = (array) => {
	return array.filter((item, index, self) => {
		return self.indexOf(item) === index
	})
}

const removeDuplicatesViaReduce = (array) => {
	return array.reduce((acc, item) => {
		return acc.includes(item) ? acc : [...acc, item]
	}, [])
}

const removeDuplicatesViaSimpleForLoop = (array) => {
	let uniqueArray = []
	for (let i = 0; i < array.length; i++) {
		const value = array[i]
		if (uniqueArray.indexOf(value) === -1) {
			uniqueArray.push(value)
		}
	}
	return uniqueArray
}

console.log(removeDuplicates([1, 2, 4, 4, 3, 2, 1, 2, 2, 13, 45, 5]))
console.log(
	removeDuplicatesViaSimpleForLoop([1, 2, 4, 4, 3, 2, 1, 2, 2, 13, 45, 5])
)
console.log(removeDuplicatesViaFilter([1, 2, 4, 4, 3, 2, 1, 2, 2, 13, 45, 5]))
console.log(removeDuplicatesViareduce([1, 2, 4, 4, 3, 2, 1, 2, 2, 13, 45, 5]))
