/*
LeetCode: https://leetcode.com/problems/maximum-subarray/description/

Given an integer array nums, find the subarray with the largest sum, and return its sum.

Input: 
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.


*/

const { log } = console
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

function maxSubArrayUnoptimised(nums) {
	let startIdx = 0
	let endIdx = 0

	let maxSum = nums[0]
	for (let i = 0; i < nums.length; i++) {
		let currentSum = 0
		for (let j = i; j < nums.length; j++) {
			currentSum = currentSum + nums[j]
			if (currentSum > maxSum) {
				maxSum = currentSum
				startIdx = i
				endIdx = j
			}
			log(maxSum, currentSum)
		}
	}
	return { sum: maxSum, arr: nums.slice(startIdx, endIdx + 1) }
}

//timeComplexity : o(n^2)
//spaceComplexity: o(1)

function maxSubArrayOptimised(nums) {
	let max = nums[0]
	let sum = 0
	for (let i = 0; i < nums.length; i++) {
		sum = sum + nums[i]
		if (sum > max) {
			max = sum
		}
		if (sum < 0) {
			sum = 0
		}
	}
	return max
}

log(maxSubArrayOptimised(nums))
