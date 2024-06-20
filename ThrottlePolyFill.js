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

// Define the function to be throttled
function handleClick() {
	console.log('Button clicked!')
}

// Create the throttled version of handleClick
const throttledClick = throttle(handleClick, 1000)

// Add the throttled function as the event listener
document.addEventListener('click', () => {
	console.log('org')
	throttledClick()
})

// ex
// Throttling Window Resize Events
// Throttling Scroll Events
