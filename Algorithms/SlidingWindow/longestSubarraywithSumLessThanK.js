/*
Given an array of integers and an integer k, find the length of the longest subarray whose sum is less than or equal to k.
Example: For the array [1, 2, 3, 4] and k = 5, the longest subarray is [1, 2] with a length of 2.


*/

function getLongestSubarray(arr, t) {
	const n = arr.length
	let maxLength = 0
	let resp = []

	for (let i = 0; i < n; i++) {
		for (let j = i; j < n; j++) {
			let currentSum = 0
			for (let k = i; k <= j; k++) {
				currentSum = currentSum + arr[k]
			}

			if (currentSum <= t) {
				let currentLength = j - i + 1
				if (currentLength > maxLength) {
					maxLength = currentLength
					resp = arr.slice(i, j + 1)
				}
			}
		}
	}
	return { maxLength, resp }
}

let ex = [1, 2, 3, 4]
let k = 5
let result = getLongestSubarray(ex, k)
console.log(result)
