class TodoServices {
	constructor() {
		if (this.constructor === TodoServices) {
			throw new Error('cannot instantiate an interface');
		}
	}

	getTodos() { throw new Error('getTodos must be implemented'); }
}

export default TodoServices;