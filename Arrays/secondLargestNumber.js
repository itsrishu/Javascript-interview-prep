/**
 * Find second largest number in an array
 * @param {Array}
 */

const getSecondLargestNumber = (arr) => {
	let largest = Number.NEGATIVE_INFINITY
	let secondLargest = Number.NEGATIVE_INFINITY
	for (const item of arr) {
		if (item > largest) {
			secondLargest = largest
			largest = item
		}
	}
	return secondLargest
}

const getSecondLargestNumberBySorting = (arr) => {
	const sortedArray = arr.sort((a, b) => a - b)
	return sortedArray[arr.length - 2]
}

console.log(getSecondLargestNumberBySorting([18, 34, 5, 6, 2]))
