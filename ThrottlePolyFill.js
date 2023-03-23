/* WRITE YOUR OWN CUSTOM THROTTLE */

function myThrottle(cb, delay) {
	let myLast = 0
	return (...args) => {
		const now = new Date().getTime()
		if (now - last < delay) return
		last = now
		return cb(...args)
	}
}
