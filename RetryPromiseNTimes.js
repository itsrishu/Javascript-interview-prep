//Q: Implement a function in JavaScript that retries promises N number of times with a delay between each call.

const RetryPromieNTimes = (fn, attempt = 0, maxAttempts = 3) => {
	return new Promise((resolve, reject) => {
		Promise.resolve()
			.then(fn)
			.catch((err) => {
				if (attempt < maxAttempts) {
					return RetryPromieNTimes(fn, attempt + 1)
				}
				throw err
			})
	})
}
