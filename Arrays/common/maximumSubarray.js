/*

    leetCode: https://leetcode.com/problems/maximum-subarray/description/
    Given an integer array nums, find the subarray with the largest sum, and return its sum.

    Input: 
    Output: 6
    Explanation: The subarray [4,-1,2,1] has the largest sum 6.s
*/

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

//Brue force approach

function maxSubarrayUnOptimised(nums) {
	const length = nums.length
	let sum = Number.NEGATIVE_INFINITY

	for (let i = 0; i < length; i++) {
		for (let j = i; j < length; j++) {
			let currentSum = 0
			for (let k = i; k < j; k++) {
				currentSum = currentSum + nums[k]
			}
			sum = Math.max(sum, currentSum)
		}
	}
	return sum
}

console.log(maxSubarrayUnOptimised(nums))

function maxSubarrayOptimised(nums) {
	let sum = nums[0]
	for (let i = 1; i < nums.length; i++) {
		nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])
		sum = Math.max(sum, nums[i])
	}
	return sum
}

//console.log(maxSubarrayOptimised(nums))
