/* WRITE YOUR OWN CUSTOM DEBOUNCE */

function customDebounce(cb, delay = 250) {
	let timer

	return (...args) => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			cb(...args)
		}, delay)
	}
}

const logMessage = (m) => {
	console.log(m)
}

const debouncedLogMsg = customDebounce(logMessage, 1000)

debouncedLogMsg('call 1')
debouncedLogMsg('call 2')
debouncedLogMsg('call 3')
debouncedLogMsg('call 4')
