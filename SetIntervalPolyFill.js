/* IMPLEMENT SETINTERVAL USING SETTIMEOUT */

function createSetInterval() {
	let intervalID = 0
	let intervalMap = {}

	function setIntervalPolyfill(cb, delay = 0, ...args) {
		const id = intervalID++
		function repeat() {
			intervalMap[id] = setTimeout(() => {
				cb(...args)

				if (intervalMap[id]) {
					repeat()
				}
			}, delay)
		}

		repeat()
		return id
	}

	function clearIntervalPolyfill(intervalID) {
		clearInterval(intervalMap[intervalID])
		delete intervalMap(intervalID)
	}

	return {
		setIntervalPolyfill,
		clearIntervalPolyfill,
	}
}
