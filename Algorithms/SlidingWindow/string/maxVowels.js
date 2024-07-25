//Maximum Number of Vowels in a Substring of Given Length

/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
*/

const VOWER_ARRAY = ['a', 'e', 'i', 'o', 'u']

function getVowels(a, k) {
	let maxVowelCount = 0
	for (let i = 0; i <= a.length - k; i++) {
		let currentVowelCount = 0
		for (let j = i; j < i + k; j++) {
			if (VOWER_ARRAY.includes(a[j])) {
				currentVowelCount++
			}
		}

		maxVowelCount = Math.max(maxVowelCount, currentVowelCount)
	}
	return maxVowelCount
}

const s = 'abciiidef'
const k = 3

console.log(getVowels(s, k))

// sliding window approach

function optimisedApproach(s, k) {
	let maxVowelCounter = 0
	let currentVowelCount = 0

	for (let i = 0; i < s.length; i++) {
		if (VOWER_ARRAY.includes(s[i])) {
			currentVowelCount++
		}
	}

	for (let i = k; i < s.length; i++) {
		if (VOWER_ARRAY.includes(s[i])) {
			currentVowelCount++
		}
		if (VOWER_ARRAY.includes(s[i - k])) {
			currentVowelCount--
		}

		maxVowelCount = Math.max(maxVowelCounter, currentVowelCount)
	}
	return maxVowelCount
}
