/*
leetCode: https://leetcode.com/problems/product-of-array-except-self/description/

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]
Input: 
Output: [24,12,8,6]

*/

const nums = [1, 2, 3, 4]

// index resultArr productValIni productValLater
// 0       [1]          1          1
// 1       [1,2]        2          2
// 2       [1,2,6]      3          6
// 3       [1,2,6,24]   4          24

function productOfArrayExceptSelf(nums) {
	const resultArr = []
	for (let i = 0; i < nums.length; i++) {
		let productVal = nums[i]
		if (resultArr.length !== 0) {
			productVal = productVal * resultArr[i - 1]
		}
		resultArr.push(productVal)
	}

	let productVal = 1
	let i = nums.length - 1 // 3
	for (i; i > 0; i--) {
		resultArr[i] = resultArr[i - 1] * productVal
		productVal = nums[i] * productVal
	}
	resultArr[i] = productVal
	return resultArr
}

console.log(productOfArrayExceptSelf(nums))
