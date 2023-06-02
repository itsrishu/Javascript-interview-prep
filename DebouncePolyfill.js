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
