/**
 * Find largest number in an array
 * @param {Array}
 */

const getLargestNumber = (array) => {
	if (array.length === 0) return 0
	if (array.length === 1) return array[0]
	let largestNumber = array[0]
	for (const item of array) {
		if (largestNumber < item) {
			largestNumber = item
		}
	}
	return largestNumber
}

const getLargestNumberAlternateMethod = (array) => {
	if (array.length === 0) return 0
	if (array.length === 1) return array[0]
	const sortedArray = array.sort((a, b) => {
		return a - b
	})
	return sortedArray[array.length - 1]
}

console.log(getLargestNumberAlternateMethod([3, 31, 2, 2, 90]))
