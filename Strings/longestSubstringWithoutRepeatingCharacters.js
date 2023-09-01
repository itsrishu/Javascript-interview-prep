/*
Given a string s, find the length of the longest substring without repeating characters.

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

function longestSubstring(s) {
	let str = ''
	for (let i = 0; i < s.length; i++) {
		if (!str.includes(s[i])) {
			str = str + s[i]
		}
	}
	return str
}

console.log(longestSubstring('abcbbbca'))
