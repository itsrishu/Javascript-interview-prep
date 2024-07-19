/*
 * Given an array of integers and a number k, find the length of the smallest contiguous subarray whose sum is greater than or equal to k.
 * Example: For the array [2, 3, 1, 2, 4, 3] and k = 7, the smallest subarray length is 2 (subarray is [4, 3]).
 */

function getSmallestContiguousArray(arr, k) {
	let minLength = Infinity
	let minSubarray = []
	for (let i = 0; i < arr.length; i++) {
		let cSum = 0
		for (let j = i; j < arr.length; j++) {
			cSum += arr[j]
			if (cSum === k && j - i + 1 < minLength) {
				minLength = j - i + 1
				minSubarray = arr.slice(i, j + 1)
			}
		}
	}
	return {
		minLength: minLength === Infinity ? 0 : minLength,
		minSubarray,
	}
}

let array = [2, 3, 1, 2, 4, 3]
let result = getSmallestContiguousArray(array, 7)
console.log(result)
