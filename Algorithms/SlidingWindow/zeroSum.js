/*
 * Given an array of integers, find all the subarrays with a sum equal to zero.
 * Example: For the array [1, -1, 2, -2, 3, -3], the subarrays with zero sum are [1, -1], [2, -2], and [3, -3].
 */

function getZeroSumArrays(arr) {
	let res = []
	for (var i = 0; i < arr.length; i++) {
		let cSum = 0
		for (let j = i; j < arr.length; j++) {
			cSum += arr[j]
			if (cSum === 0) {
				res.push(arr.slice(i, j + 1))
			}
		}
	}
	return res
}

let array = [1, 2, -3, 8, -6]
let result = getZeroSumArrays(array, 7)
console.log(result)

function findZeroSumSubarrays(arr) {
	const cumulativeSumMap = {}
	let cumulativeSum = 0
	const results = []

	// Initialize the map with an empty array for sum 0
	cumulativeSumMap[0] = [-1]

	for (let i = 0; i < arr.length; i++) {
		cumulativeSum += arr[i]

		// Check if this cumulative sum has been seen before
		if (cumulativeSumMap.hasOwnProperty(cumulativeSum)) {
			const indices = cumulativeSumMap[cumulativeSum]
			for (let index of indices) {
				results.push(arr.slice(index + 1, i + 1))
			}
		}

		// Store the current index for this cumulative sum
		if (!cumulativeSumMap[cumulativeSum]) {
			cumulativeSumMap[cumulativeSum] = []
		}
		cumulativeSumMap[cumulativeSum].push(i)
	}

	return results
}

// Example usage:
const arr = [3, 4, -7, 1, 2, -1, 4, 2, -2]
const res = findZeroSumSubarrays(arr)
console.log(res)
// Output: [[3, 4, -7], [4, -7, 1, 2], [-7, 1, 2, -1, 4, 2, -2], [1, 2, -1, 4, 2,
