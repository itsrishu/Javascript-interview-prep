const f = [1, 2, 3, 4, 2, 1, 21, 2, 3, 3, 3, 3, 4, 1, 2, 122, 2, 2]

function freqArr(arr) {
	let freqCounter = {}
	let maxFreq = 0
	let maxFreqEle = null

	for (const val of arr) {
		if (freqCounter.hasOwnProperty(val)) {
			freqCounter[val]++
		} else {
			freqCounter[val] = 1
		}
	}

	for (const [elem, freq] of Object.entries(freqCounter)) {
		if (freq > maxFreq) {
			maxFreq = freq
			maxFreqEle = elem
		}
	}

	return { maxFreq, maxFreqEle }
}
