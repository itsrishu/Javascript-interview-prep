/*

leetCode: https://leetcode.com/problems/merge-intervals/description/

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].


*/

let intervals = [
	[1, 3],
	[2, 6],
	[8, 10],
	[15, 18],
]

function mergeIntervals(nums) {
	nums.sort((a, b) => a[0] - b[0])
	let pair = nums[0]
	let result = []
	for (const i of nums) {
		if (pair[1] >= i[0]) {
			pair[1] = Math.max(i[1], pair[1])
		} else {
			result.push(pair)
			pair = i
		}
	}
	result.push(pair)
	return result
}

function mergedIntervalBR(nums) {
	let mergedInt = []
	for (let i = 0; i < nums.length; i++) {
		let curr = nums[i]
		let merged = false
		for (let j = 0; j < mergedInt.length; j++) {
			let exis = mergedInt[j]
			if (curr[0] <= exis[1] && curr[1] >= exis[0]) {
				exis[0] = Math.min(curr[0], exis[0])
				exis[1] = Math.max(curr[1], exis[1])
				merged = true
				break
			}
		}
		if (!merged) {
			mergedInt.push(curr)
		}
	}
	return mergedInt
}

console.log(mergedIntervalBR(intervals))

//create a Div inside 3 div with box of equal size
// and circle at the center
//inside circle there is a number which increase when we click on that box all circle and box mush have a same class
