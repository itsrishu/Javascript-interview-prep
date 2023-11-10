function freqArr(arr) {
	let freqCounter = {}
	let minFreq = Infinity
	let minFreqEle = null

	for (const val of arr) {
		if (freqCounter.hasOwnProperty(val)) {
			freqCounter[val]++
		} else {
			freqCounter[val] = 1
		}
	}

	console.log(freqCounter)

	for (const [elem, freq] of Object.entries(freqCounter)) {
		if (freq < minFreq) {
			minFreq = freq
			minFreqEle = elem
		}
	}

	return { minFreq, minFreqEle }
}

const f = [1, 2, 3, 4, 2, 1, 21, 2, 3, 3, 3, 3, 4, 1, 2, 122, 2, 2]
console.log(freqArr(f))
