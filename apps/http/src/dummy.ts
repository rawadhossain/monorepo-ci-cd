// user.ts
interface User {
	id: number;
	name: string;
	email: string;
}

class UserService {
	private users: User[] = [];

	constructor() {
		this.users = [
			{ id: 1, name: "John Doe", email: "john.doe@example.com" },
			{ id: 2, name: "Jane Doe", email: "jane.doe@example.com" },
			// ... 100 more users ...
		];
	}

	getUsers(): User[] {
		return this.users;
	}

	getUserById(id: number): User | undefined {
		return this.users.find((user) => user.id === id);
	}

	createUser(user: User): void {
		this.users.push(user);
	}

	updateUser(id: number, user: User): void {
		const index = this.users.findIndex((user) => user.id === id);
		if (index !== -1) {
			this.users[index] = user;
		}
	}

	deleteUser(id: number): void {
		const index = this.users.findIndex((user) => user.id === id);
		if (index !== -1) {
			this.users.splice(index, 1);
		}
	}
}

// post.ts
interface Post {
	id: number;
	title: string;
	content: string;
	author: User;
}

class PostService {
	private posts: Post[] = [];

	constructor(private userService: UserService) {}

	getPosts(): Post[] {
		return this.posts;
	}

	getPostById(id: number): Post | undefined {
		return this.posts.find((post) => post.id === id);
	}

	createPost(post: Post): void {
		this.posts.push(post);
	}

	updatePost(id: number, post: Post): void {
		const index = this.posts.findIndex((post) => post.id === id);
		if (index !== -1) {
			this.posts[index] = post;
		}
	}

	deletePost(id: number): void {
		const index = this.posts.findIndex((post) => post.id === id);
		if (index !== -1) {
			this.posts.splice(index, 1);
		}
	}
}

// comment.ts
interface Comment {
	id: number;
	content: string;
	author: User;
	post: Post;
}

class CommentService {
	private comments: Comment[] = [];

	constructor(
		private userService: UserService,
		private postService: PostService
	) {}

	getComments(): Comment[] {
		return this.comments;
	}

	getCommentById(id: number): Comment | undefined {
		return this.comments.find((comment) => comment.id === id);
	}

	createComment(comment: Comment): void {
		this.comments.push(comment);
	}

	updateComment(id: number, comment: Comment): void {
		const index = this.comments.findIndex((comment) => comment.id === id);
		if (index !== -1) {
			this.comments[index] = comment;
		}
	}

	deleteComment(id: number): void {
		const index = this.comments.findIndex((comment) => comment.id === id);
		if (index !== -1) {
			this.comments.splice(index, 1);
		}
	}
}

// main.ts
const userService = new UserService();
const postService = new PostService(userService);
const commentService = new CommentService(userService, postService);

// ... 1000 more lines of code ...
