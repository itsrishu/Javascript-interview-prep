function customSetInterval(callback, interval) {
	const startTime = Date.now()
	let canceled = false

	function intervalHandler() {
		if (canceled) return

		const elapsed = Date.now() - startTime
		if (elapsed >= interval) {
			callback()
			startTime = Date.now()
		}

		requestAnimationFrame(intervalHandler)
	}

	requestAnimationFrame(intervalHandler)

	// Return an object with a method to cancel the interval
	return {
		cancel: function () {
			canceled = true
		},
	}
}

// Example usage:
let count = 0
const intervalId = customSetInterval(() => {
	console.log('Custom setInterval executed!', count)
	count++

	if (count >= 5) {
		intervalId.cancel()
		console.log('Custom setInterval stopped.')
	}
}, 1000)

// using settimeout

function customSetInterval(callback, interval) {
	function intervalHandler() {
		callback()
		setTimeout(intervalHandler, interval)
	}

	setTimeout(intervalHandler, interval)
}

// Example usage:
let c = 0
const inTd = customSetInterval(() => {
	console.log('Custom setInterval executed!', count)
	count++

	if (c >= 5) {
		clearInterval(inTd)
		console.log('Custom setInterval stopped.')
	}
}, 1000)
