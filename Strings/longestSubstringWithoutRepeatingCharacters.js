/*
Given a string s, find the length of the longest substring without repeating characters.

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

function lengthOfLongestSubstring(s) {
	let charSet = new Set()
	let left = 0
	let maxLength = 0

	for (let right = 0; right < s.length; right++) {
		// Remove characters from the left until there's no repetition
		while (charSet.has(s[right])) {
			charSet.delete(s[left])
			left++
		}

		// Add the current character to the set
		charSet.add(s[right])

		// Update the maximum length found so far
		maxLength = Math.max(maxLength, right - left + 1)
	}

	return maxLength
}

console.log(lengthOfLongestSubstring('abcbbbcak'))
