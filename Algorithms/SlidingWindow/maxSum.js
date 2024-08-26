function getMaxSum(arr) {
	const n = arr.length
	let maxSum = -Infinity
	let start = 0
	let end = 0
	for (let i = 0; i < n; i++) {
		for (let j = i; j < n; j++) {
			let currentSum = 0
			for (let k = i; k <= j; k++) {
				currentSum += arr[k]
			}

			if (currentSum > maxSum) {
				maxSum = currentSum
				start = i
				end = j
			}
		}
	}

	const arry = arr.slice(start, end + 1)

	return { maxSum, arry }
}

const example = [1, 2, 3, -8, 5]
const r = getMaxSum(example)
console.log(r)

function maxSubArray(nums) {
	let maxEndingHere = nums[0]
	let maxSoFar = nums[0]

	for (let i = 1; i < nums.length; i++) {
		maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i])
		maxSoFar = Math.max(maxSoFar, maxEndingHere)
	}

	return maxSoFar
}

// Example usage:
console.log(maxSubArray(example)) // Output: 6 (subarray [4, -1, 2, 1])

function maxSubArrayy(nums) {
	let maxEndingHere = nums[0]
	let maxSoFar = nums[0]
	let start = 0
	let end = 0
	let tempStart = 0

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > maxEndingHere + nums[i]) {
			maxEndingHere = nums[i]
			tempStart = i
		} else {
			maxEndingHere += nums[i]
		}

		if (maxEndingHere > maxSoFar) {
			maxSoFar = maxEndingHere
			start = tempStart
			end = i
		}
	}

	return {
		maxSum: maxSoFar,
		subArray: nums.slice(start, end + 1),
	}
}

// Example usage:
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const result = maxSubArrayy(example)
console.log(result.maxSum) // Output: 6
console.log(result.subArray) // Output: [4, -1, 2, 1]
