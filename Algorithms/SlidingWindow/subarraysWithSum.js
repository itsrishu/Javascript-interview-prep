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
