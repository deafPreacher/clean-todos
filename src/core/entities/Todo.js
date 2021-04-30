class Todo {
	constructor(id, text, status=false) {
		this._id = id;
		this._text = text;
		this._status = status;
	}

	get id() {
		return this._id;
	}

	get text() {
		return this._text;
	}

	get status() {
		return this._status;
	}
}

export default Todo;