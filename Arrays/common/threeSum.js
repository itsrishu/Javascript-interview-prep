/* Given an array of integers, find all unique triplets in the array which gives the sum of zero. */

function threeSum(nums) {
	arr.sort((a, b) => a - b)
	const result = []
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) continue

		let target = nums[i] * -1
		let subResult = twoSum(i + 1, target, nums)
		result.push(...subResult)
	}
}

function twoSum(j, target, nums) {
	let k = nums.length - 1
	const result = []
	while (j < k) {
		let leftVal = nums[j]
		let rightVal = nums[k]
		if (leftVal + rightVal > target) {
			k--
		} else if (leftVal + rightVal < target) {
			j++
		} else {
			result.push([target * -1, leftVal, rightVal])
			while (j < k && nums[j] === nums[j + 1]) j++
			while (j < k && nums[k] === nums[k - 1]) k--
			j++
			k--
		}
	}
	return result
}

// time: o(n^2)
//space: o(n)

//Brute force approach
function threeSumBR(nums) {
	let len = nums.length
	let result = []
	for (let i = 0; i < len - 2; i++) {
		for (let j = i + 1; j < len - 1; j++) {
			for (let k = j + 1; k < len; k++) {
				if (nums[i] + nums[j] + nums[k] === 0) {
					result.push([nums[i], nums[j], nums[k]])
				}
			}
		}
	}
	return result
}

// time: o(n^3)
//space: o(n)
