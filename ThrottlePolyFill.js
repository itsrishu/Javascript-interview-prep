/* WRITE YOUR OWN CUSTOM THROTTLE */

function throttle(func, delay) {
	let lastCallTime = 0

	return function (...args) {
		const now = Date.now()

		if (now - lastCallTime >= delay) {
			func.apply(this, ...args)
			lastCallTime = now
		}
	}
}

document
	.getElementById('normal')
	.addEventListener('click', (e) => throttledClick)

const throttledClick = throttle(handleClick, 1000)

function handleClick() {
	console.log('Button clicked!')
}

;<button id='normal' onClick={handleClick}>
	Click
</button>
