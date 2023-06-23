// Simple Analytics Library with debouncing and a stack to group events together

//type UserData = { name: string, email: string } | null
//type EventType = { type: string, payload: unknown }

const endpoint = '...'

const sendEvents = async (data) => {
	return new Promise((resolve) => {
		setTimeout(resolve, 1000, data)
	})
}

class Analytics {
	debounceTimeout = null
	eventsStack = []
	sending = false
	eventsPacket = null

	identify = (updatedUserData) => {
		this.userData = updatedUserData
	}

	sendToServer = async () => {
		if (this.sending) return
		this.sending = true
		if (!eventsPacket) {
			this.eventsPacket = [...this.eventsStack]
			this.eventsStack = []
		}
		try {
			await sendEvents(eventsToSend)
			this.sending = false
			this.eventsPacket = null
		} catch (e) {
			if (!eventsPacket) return
			if (maxRetries === 0) {
				throw new Error(
					`API request failed after maximum retries: ${error}`
				)
			}
			const delay = Math.random() * 5000 // Random delay between 0 and 5 seconds
			console.warn(`API request failed, retrying in ${delay} ms...`)
			await new Promise((resolve) => setTimeout(resolve, delay))
			return await sendEvents(url, options, maxRetries - 1)
		}
	}

	track = (event) => {
		this.eventsStack.push({ event: event, id: uuid(), user: this.userData })
		clearTimeout(this.debounceTimeout)
		this.debounceTimeout = setTimeout(this.sendToServer, 250)
	}

	constructor() {
		window.addEventListener('onbeforeunload', () => {
			if (this.eventsStack.length) {
				this.sendToServer() // Start a keepalive request
				clearTimeout(this.debounceTimeout)
			}
		})
	}
}
