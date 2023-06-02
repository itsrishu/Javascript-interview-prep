/* WRITE YOUR OWN CUSTOM THROTTLE */

function myThrottle(cb, delay) {
	let myLast = 0
	return (...args) => {
		const now = new Date().getTime()
		if (now - myLast < delay) return
		myLast = now
		return cb(...args)
	}
}
