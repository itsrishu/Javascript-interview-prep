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

const secondLargestNumber = (arr) => {
	let firstLargest = -Infinity
	let secondLargest = Infinity

	for (let i = 0; i < arr.length; i++) {
		const ele = arr[i]
		if (ele > firstLargest) {
			firstLargest = ele
			secondLargest = firstLargest
		} else if (ele > secondLargest && ele !== firstLargest) {
			secondLargest = ele
		}
	}
	return secondLargest
}

console.log(secondLargestNumber([18, 34, 5, 6, 2]))
