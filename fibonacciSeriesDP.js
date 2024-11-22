function fibonacci(n) {
	if (n <= 1) return n

	const dp = [0, 1] // Initialize base cases
	for (let i = 2; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2]
	}

	return dp
}

console.log(fibonacci(13)) // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
