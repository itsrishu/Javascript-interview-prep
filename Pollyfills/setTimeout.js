/*
 If you are working in a non-browser environment (like Node.js) 
 or if requestAnimationFrame is not available for some reason, you may encounter an issue.
*/

const customSetTimeout = (cb, delay) => {
	let start = new Date().getTime()

	const check = () => {
		if (new Date().getTime() - start >= delay) {
			cb()
		} else {
			requestAnimationFrame(check)
		}
	}

	requestAnimationFrame(check)
}

customSetTimeout(() => {
	console.log('11111')
}, 1000)
