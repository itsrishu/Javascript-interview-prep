/* WRITE YOUR OWN CUSTOM DEBOUNCE */

function myDebounce(cb, delay) {
	let timer

	return function (...args) {
		if (timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(() => {
			cb(...args)
		}, delay)
	}
}
