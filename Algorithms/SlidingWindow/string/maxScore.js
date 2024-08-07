/*
1422. Maximum Score After Splitting a String

Given a string s of zeros and ones, return the maximum score after splitting the string into two 
non-empty substrings (i.e. left substring and right substring).
The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.


Input: s = "011101"
Output: 5 
Explanation: 
All possible ways of splitting s into two non-empty substrings are:
left = "0" and right = "11101", score = 1 + 4 = 5 
left = "01" and right = "1101", score = 1 + 3 = 4 
left = "011" and right = "101", score = 1 + 2 = 3 
left = "0111" and right = "01", score = 1 + 1 = 2 
left = "01110" and right = "1", score = 2 + 1 = 3

*/

function getAllSplitPairs(s) {
	const result = []
	const n = s.length
	let maxScore = 0
	for (let i = 1; i < n; i++) {
		const left = s.substring(0, i)
		const right = s.substring(i)
		let score = 0
		let maxZeros = 0
		for (const i of left) {
			if (i === '0') {
				maxZeros++
			}
		}

		let maxOnes = 0
		for (const i of right) {
			if (i === '1') {
				maxOnes++
			}
		}

		score = maxOnes + maxZeros
		maxScore = Math.max(maxScore, score)
	}

	return maxScore
}

// optimised approach

function optimisedApproach(s) {
	let maxScore = 0
	let totalOnes = 0
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '1') {
			totalOnes++
		}
	}
	let leftZeroes = 0
	let rightOnes = totalOnes
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '0') {
			leftZeroes++
		} else {
			rightOnes--
		}

		const score = rightOnes + leftZeroes
		maxScore = Math.max(maxScore, score)
	}
	return maxScore
}

console.log(optimisedApproach('011101'))
