/*
 If you are working in a non-browser environment (like Node.js) 
 or if requestAnimationFrame is not available for some reason, you may encounter an issue.
*/

function mySetTimeout(callback, delay) {
	var startTime = Date.now()
	function check() {
		if (Date.now() > startTime + delay) {
			callback()
		} else requestIdleCallback(check)
	}
	requestIdleCallback(check)
}

mySetTimeout(() => {
	console.log('hi')
}, 1000)
