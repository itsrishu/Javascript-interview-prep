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
