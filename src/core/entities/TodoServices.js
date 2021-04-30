class TodoServices {
	constructor() {
		if (this.constructor === TodoServices) {
			throw new Error('cannot instantiate an interface');
		}
	}

	getTodos() { throw new Error('all methods must be implemented'); }
	createTodo() { throw new Error('all methods must be implemented'); }
	updateTodo() { throw new Error('all methods must be implemented'); }
}

export default TodoServices;