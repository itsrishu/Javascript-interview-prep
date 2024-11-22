/*
    A simple Pub/Sub (Publisher/Subscriber) system allows different parts of a program to 
    communicate by subscribing to events and publishing messages. When a message is published to a topic, 
    all subscribers to that topic are notified.
*/

class PubSub {
	constructor() {
		this.subscribers = []
	}

	subscribe(subscriber) {
		this.subscribers = [...this.subscribers, subscriber]
	}

	unsubscriber(subscriber) {
		this.subscribers = this.subscribers.filter((sub) => sub !== subscriber)
	}

	publish(payload) {
		this.subscribers.forEach((sub) => sub(payload))
	}
}

const pubSub = new PubSub()

// Subscriber 1 subscribes to messages
const subscriber1 = (message) =>
	console.log(`Subscriber 1 received: ${message}`)
pubSub.subscribe(subscriber1)

// Subscriber 2 subscribes to messages
const subscriber2 = (message) =>
	console.log(`Subscriber 2 received: ${message}`)
pubSub.subscribe(subscriber2)

// Publish a message to all subscribers
pubSub.publish('Hello Subscribers!')

// Unsubscribe Subscriber 1
pubSub.unsubscribe(subscriber1)

// Publish another message, only Subscriber 2 will receive it
pubSub.publish('Goodbye Subscribers!')

/*

output

Subscriber 1 received: Hello Subscribers!
Subscriber 2 received: Hello Subscribers!
Subscriber 2 received: Goodbye Subscribers!


*/
