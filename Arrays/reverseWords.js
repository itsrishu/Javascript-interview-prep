function breakWords(s) {
	let brokenWords = []
	let current = ''

	for (let i = 0; i < s.length; i++) {
		let char = s[i]
		if (char !== ' ') {
			current = current + char
		} else {
			brokenWords.push(current)
			current = ''
		}
	}
	brokenWords.push(current)
	return brokenWords
}

const r = 'They were enjoying it daily'

const reverseWords = (s) => {
	let reversedWords = ''
	let currentWord = ''

	for (let i = s.length - 1; i >= 0; i--) {
		let char = s[i]

		if (char !== ' ') {
			currentWord = char + currentWord
		} else {
			reversedWords = reversedWords + ' ' + currentWord
			currentWord = ''
		}
	}

	reversedWords = reversedWords + ' ' + currentWord // Add the last word
	return reversedWords.trim() // Remove leading space
}
