class Feed {
	constructor(post) {
		this.post = post
	}
}

class Post {
	constructor(data) {
		this.title = data.title
		this.content = data.content
		this.images = data.images
		this.comment = []
		this.creator = null
	}
}

class Comment {
	constructor(data) {
		this.title = data.title
		this.content = data.content
		this.images = data.images
		this.creator = null
	}
}

class User {
	constructor(u) {
		this.firstName = u.firstName
		this.follower = u.lastName
		this.id = (Math.random(0, 1) * 1000000).toFixed()
		this.followers = []
		this.followings = []
		this.isFollowing = false
	}

	canFollow(user) {}
	canUnFollow(user) {}
	createPost(post) {}
	removePost(post) {}
}

const u1 = new User({
	firstName: 'John',
	follower: 'Doe',
	followers: [],
	followings: [],
	isFollowing: false,
})

const p1 = new Post({
	title: 'title',
	content: 'content',
	images: [],
	comment: [],
	creator: u1,
})

const feed = new Post()
