/* WRITE YOUR OWN CUSTOM DEBOUNCE */

function debounce(func, delay) {
	let timeoutId

	return function (...args) {
		const context = this

		clearTimeout(timeoutId)

		timeoutId = setTimeout(() => {
			func.apply(context, args)
		}, delay)
	}
}

function logMessage(message) {
	console.log(message)
}

const debouncedLogMessage = debounce(logMessage, 300)

// When this function is called repeatedly within 300ms, the `logMessage` function will only be executed once.
debouncedLogMessage('Hello')
debouncedLogMessage('Hi')
debouncedLogMessage('Hey')

//Updated Debounce Function with Acceptance Window:
function debounce(func, delay, acceptanceWindow = 0) {
	let timeoutId

	return function (...args) {
		const context = this

		clearTimeout(timeoutId)

		const adjustedDelay = delay - delay * (acceptanceWindow / 100)

		timeoutId = setTimeout(() => {
			func.apply(context, args)
		}, adjustedDelay)
	}
}

function logMessage(message) {
	console.log(message)
}

const debouncedLogMessages = debounce(logMessage, 300, 20)

// The actual delay will be reduced by 20%, so the function will be executed after 240ms instead of 300ms.
debouncedLogMessages('Hello')
debouncedLogMessages('Hi')
debouncedLogMessages('Hey')
