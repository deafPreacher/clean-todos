class Todo {
	constructor(id, text, status=false) {
		this.id = id;
		this.text = text;
		this.status = status;
	}

	get id() {
		return this.id;
	}

	get text() {
		return this.text;
	}

	get status() {
		return this.status;
	}
}

export default Todo;