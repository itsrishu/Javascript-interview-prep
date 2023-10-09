/* 

leetCode :- https://leetcode.com/problems/find-the-duplicate-number/description/

*/

function removeDuplicate(nums) {
	let obj = {}
	for (const i of nums) {
		if (!obj[i]) {
			obj[i] = 1
		} else {
			return i
		}
	}
}

//Overall, the time complexity of the function is O(n) because the loop dominates the time complexity.
//the space complexity of the function is O(n) in the worst case, where n is the number of unique elements in the nums array.

const { log } = console

//log(removeDuplicate([1, 2, 1]))

function removeDuplicatesOptimised(nums) {
	let fast = 0
	let slow = 0
	while (true) {
		fast = nums[nums[fast]]
		slow = nums[slow]

		if (fast === slow) {
			let pointer = 0
			while (pointer !== slow) {
				pointer = nums[pointer]
				slow = nums[slow]
			}
			return pointer
		}
	}
}

function findDuplicates(nums) {
	return nums.filter((num, i, self) => self.indexOf(num) !== i)
}

log(findDuplicates([1, 3, 4, 2, 3, 1, 4, 8, 9]))
