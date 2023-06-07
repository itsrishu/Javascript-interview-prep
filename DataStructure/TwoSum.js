/**Given an array of integers nums and an integer target, check if there are two numbers in the array such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You should return true or false.

*/

/*
Input: nums = [2,7,11,15], target = 9 
Output: true 
Output: Because nums[0] + nums[1] == 9, we return true.
*/

function twoSum(nums, target) {
	let hasTwoSum = false
	for (let i = 0; i < nums.length; i++) {
		for (let k = i + 1; k < nums.length; k++) {
			if (nums[i] + nums[k] == target) {
				hasTwoSum = true
			}
		}
	}

	return hasTwoSum
}

console.log(twoSum([2, 7, 11, 15], 26))
