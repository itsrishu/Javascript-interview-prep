/*

    * Given an array of integers and a sum s, find the number of subarrays whose sum is equal to s.
    * Example: For the array [1, 1, 1] and s = 2, the number of subarrays is 2 (subarrays are [1, 1] and [1, 1]).

*/

function countSubarrays(arr, sum) {
	const n = arr.length
	let result = []
	for (let i = 0; i < n; i++) {
		for (let j = i; j < n; j++) {
			let subarray = []
			let currentSum = 0
			for (let k = i; k <= j; k++) {
				currentSum += arr[k]
				subarray.push(arr[k])
			}

			if (currentSum === sum) {
				result.push(subarray)
			}
		}
	}
	return result
}

let array = [1, 2, 3, 1, 5, 4, 2]
let resp = countSubarrays(array, 6)
console.log(resp, 'aaa')

function countSubarraysWithSum(arr, s) {
	const n = arr.length
	const cumulativeSumMap = {}
	let cumulativeSum = 0
	let count = 0

	// Initialize the map with the sum 0 having frequency 1
	cumulativeSumMap[0] = 1

	for (let i = 0; i < n; i++) {
		cumulativeSum += arr[i]

		// Check if (cumulativeSum - s) exists in the map
		if (cumulativeSumMap.hasOwnProperty(cumulativeSum - s)) {
			count += cumulativeSumMap[cumulativeSum - s]
		}

		// Add the current cumulative sum to the map
		if (cumulativeSumMap.hasOwnProperty(cumulativeSum)) {
			cumulativeSumMap[cumulativeSum]++
		} else {
			cumulativeSumMap[cumulativeSum] = 1
		}
	}

	return count
}

// Example usage:
const arr = [1, 1, 1]
const s = 2
console.log(countSubarraysWithSum(arr, s)) // Output: 2
