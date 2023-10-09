/* Given an array of integers, find two numbers such that they add up to a specific target number. */

//space - 0(1) - constant
//time complexity - o(n^2)

function twoSum(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		//n
		for (let j = i + 1; j < arr.length; j++) {
			// n
			if (arr[i] + arr[j] === target) {
				return [i, j]
			} else {
			}
		}
	}
}

//space - 0(n) - constant
//time complexity - o(n)

function twoSumOptimised(arr, target) {
	let prevValue = {}
	for (let i = 0; i < arr.length; i++) {
		const current = arr[i]
		const neededNumber = target - current
		if (prevValue[neededNumber] !== undefined) {
			return [prevValue[neededNumber], i]
		} else {
			prevValue[current] = i
		}
	}
}

console.log(twoSumOptimised([2, 7, 10, 11], 9))
