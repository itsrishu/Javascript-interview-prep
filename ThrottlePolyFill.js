/* WRITE YOUR OWN CUSTOM THROTTLE */

function myThrottle(cb, delay) {
	let myLast = 0
	let timer = null
	return (...args) => {
		const now = new Date().getTime()
		if (now - myLast < delay) {
			clearTimeout(timer)
			timer = setTimeout(() => {
				myLast = now
				cb(...args)
			}, delay)
			return
		}
		myLast = now
		cb(...args)
	}
}

/*
A timer variable is introduced to keep track of the setTimeout timer.
When a function call is made within the throttle delay, the timer is cleared using clearTimeout to prevent the delayed execution. 
Then, a new timer is set using setTimeout to invoke the function after the delay has passed.
This adjustment ensures that the first function call is executed immediately, 
without any delay, while subsequent calls within the throttle delay are throttled.

*/
