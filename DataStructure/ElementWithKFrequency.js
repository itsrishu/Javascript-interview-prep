/* Given an array of elements arr and a number k find an element which has occurred K times.

If there are no such element then return -1.

Note: If there are two or more elements with same frequency, return the smallest.

Input: arr = [2, 4, 4, 3, 3, 7, 7, 7, 8] k = 3
Output: 7

Input: arr = [1, 2, 3, 4, 4] k = 3
Output: -1

*/

function getElementWithKFrequency(arr, k) {
	let result = {}

	for (let item of arr) {
		if (result[item]) {
			result[item]++
		} else {
			result[item] = 1
		}
	}

	let theNumberWithKFrequency = -Infinity
	for (const key in result) {
		const val = result[key]
		if (val === k) {
			theNumberWithKFrequency = key
		}
		return -1
	}

	return theNumberWithKFrequency
}

console.log(getElementWithKFrequency([1, 2, 3, 4, 4], 3))
