/*
    Longest Palindromic Substring
    Input: s = "babad"
    Output: "bab"
    Explanation: "aba" is also a valid answer.
*/

function LongestPalindromicSubstring(s) {
	const n = s.length
	let maxLength = 1
	let start = 0
	const dp = Array.from({ length: n }, () => Array(n).fill(false))
	for (let i = 0; i < n; i++) {
		dp[i][i] = true
	}

	for (let i = 0; i < n - 1; i++) {
		if (s[i] === s[i + 1]) {
			dp[i][i + 1] = true
			maxLength = 2
			start = i
		}
	}

	for (let l = 3; l <= n; l++) {
		for (let i = 0; i <= n - l; i++) {
			let j = i + l - 1
			if (s[i] === s[j] && dp[i + 1][j - 1]) {
				dp[i][j] = true
				if (l > maxLength) {
					maxLength = l
					start = i
				}
			}
		}
	}
	return s.substring(start, start + maxLength)
}

console.log(LongestPalindromicSubstring('cbbd'))
