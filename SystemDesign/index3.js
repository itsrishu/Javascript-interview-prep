function CreateYoruSDK(trackingID) {
	let queueStack = []
	let isSending = false
	let initialized = false
	let id = trackingID

	this.init = function () {
		if (!initialized && id) {
			initialized = true
			// implement other important functions such as: configuration / endpoint
		}
	}

	this.trackEvent = debounce(function () {
		queueStack.push({ name: evt.name, data: evt.data })
		if (!isSending) {
			sendToServer()
		}
	}, 2000)

	function sendToServer() {
		if (queueStack.length === 0) {
			isSending = false
			return
		}

		let batchSize = 10
		const batch = queueStack.splice(0, batchSize)
		const payload = batch.map((item) => ({
			name: item.name,
			data: item.data,
		}))
		isSending = true

		simulateApiCall(payload)
			.then((response) => {
				console.log('Batch events are processed successfully', response)
				isSending = false // Set isSending back to false after successful response
			})
			.catch((error) => {
				console.log('Batch events are not processed', error)
				queueStack.unshift(...batch)
				isSending = false
			})
			.finally(() => {
				sendToServer()
			})
	}
}

function simulateApiCall(payload) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random < 0.8) {
				resolve('')
			} else {
				reject('')
			}
		}, 2000)
	})
}

function debounce(fn, delay) {}

const sdk = CreateYoruSDK('YOUR_TRACKING_ID')
sdk.init()
sdk.trackEvent('pageView', { page: 'home' })
sdk.trackEvent('Click', { button: 'Buy now' })
sdk.trackEvent('pageView', { page: 'home' })
