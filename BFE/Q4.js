// Could you implement your own version of basic throttle()?

// In case you forgot, throttle(func, delay) will return a throttled function,
// which will invoke the func at a max frequency no matter how throttled one is called.

function customThrottle(func, delay) {
	const last = 0
	return (...args) => {
		const now = new Date().getTime() // 300
		if (now - last < delay) return // 300 - 0 < 800
		last = now
		return func(args)
	}
}

const throttledFunc = customThrottle(() => {}, 800)
