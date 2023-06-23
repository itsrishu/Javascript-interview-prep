function CreateYourSDk(trackingID) {
	let initalized = false
	let queueStack = []
	let isSending = false
	let id = trackingID

	this.init = function () {
		if (initalized) {
			initalized = true
			//we can have config logic // endpoint building logic here
		}

		this.trackEvents = debounce(function () {
			eventQueue.push({ name: evtName, data: evtData })
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
			let batch = queueStack.splice(0, batchSize)
			const payload = batch.map((evt) => ({
				name: evt.name,
				data: evt.data,
			}))
			isSending = true
			simulateApiCall(payload)
				.then((result) => {
					console.log('Batch request successful:', result)
					isSending = false // Set isSending back to false after successful response
				})
				.catch((error) => {
					console.log('Error sending batch request:', error)
					eventQueue.unshift(...batch)
					isSending = false
				})
				.finally(() => {
					sendToServer()
				})
		}
	}
}

function simulateApiCall(payload) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() < 800) {
				resolve('Batch events processed succesfully')
			} else {
				reject('Batch events are rejected')
			}
		}, 2000)
	})
}

function debounce(cb, delay) {}

const sdk = new CreateYourSDk('YOUR_TRACKING_ID')
sdk.trackEvent('PageView', { page: 'home' })
sdk.trackEvent('Click', { button: ' Buy now' })
sdk.trackEvent('PageView', { page: 'product' })
