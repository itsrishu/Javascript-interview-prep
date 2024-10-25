//Sort 0 and 1’s

function sort0And1(nums) {
	let left = 0
	let n = nums.length

	for (let i = 0; i < n; i++) {
		if (nums[i] === 0) {
			;[nums[i], nums[left]] = [nums[left], nums[i]]
			left++
		}
	}
	return nums
}

console.log(sort0And1([0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0]))
