/*
    Creating an SDK
*/

function CreateYoruSDK(trackingID) {
	// internal variable
	var initialized = false
	var id = trackingID
	let eventQueue = []
	let isSending = false

	this.init = function () {
		if (!initialized) {
			//perfrom initialisation task
			initialized = true
		}
	}

	this.trackEvent = debounce(function (evtName, evtData) {
		eventQueue.push({ name: evtName, data: evtData })
		if (!isSending) {
			sendToServer()
		}
	}, 2000)

	function sendToServer() {
		if (eventQueue.length === 0) {
			isSending = false
			return
		}

		const batchSize = 10
		const batch = eventQueue.splice(0, batchSize)
		const payload = batch.map((evt) => ({
			name: evt.name,
			data: evt.data,
		}))
		isSending = true
		simulateApiCall(payload)
			.then((response) => {
				console.log('Batch request successful:', response)
			})
			.catch((err) => {
				console.log('Error sending batch request:', err)
				batch = []
				isSending = false
			})
			.finally(() => {
				sendToServer
			})
	}
}

function simulateApiCall(data) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() < 0.8) {
				resolve('Batch request processed successfully')
			} else {
				reject('Error processing batch request')
			}
		}, 2000)
	})
}

function debounce(cb, delay) {
	let timer
	return (...args) => {
		if (timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(() => {
			cb.apply(this, args)
		}, delay)
	}
}

const sdk = new CreateYoruSDK('YOUR_TRACKING_ID')
sdk.init()
sdk.trackEvent('PageView', { page: 'Home' })
sdk.trackEvent('Click', { button: 'Buy Now' })
sdk.trackEvent('PageView', { page: 'Product' })

/*
Q: Why did you use a debounce? 

By wrapping the trackEvent function with debounce, 
we ensure that events are only added to the event queue after a certain delay of inactivity. 
This helps in rate-limiting the number of events that are processed and sent to the server.
Here's the rationale behind this approach:

Event rate-limiting: In analytics scenarios, it's common to have events triggered rapidly, 
such as mouse clicks or scroll events. If we debounce the API call directly, it would delay sending each individual event, 
potentially resulting in a loss of granularity and accuracy in the analytics data.

Batched processing: The objective of using debounce in this scenario is to batch events together and 
send them as a single request to the server. 
By wrapping the trackEvent function, we collect multiple events within the debounce delay period and form a batch.

Reduced network overhead: Sending a batched request with multiple events reduces the number of API calls
and network overhead compared to making individual API calls for each event. 
This can improve performance and efficiency.

By using debounce on the trackEvent function, we strike a balance between collecting multiple events
within a certain time window and minimizing the number of API requests made to the server.
It's important to note that the debounce delay value can be adjusted based on the 
requirements of the analytics SDK and the desired rate at which events should be processed and sent.

*/
