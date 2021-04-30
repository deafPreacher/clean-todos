import Todo from '../entities/Todo';

class TodoUseCasesI {
	constructor() {
		if (this.constructor === TodoUseCasesI) {
			throw new Error('cannot instantiate an interface');
		}
	}

	getTodos() { throw new Error('getTodos must be implemented'); }
	// createTodo(todo) { throw new Error('getTodos must be implemented'); }
	// removeTodo(todo) { throw new Error('getTodos must be implemented'); }
	// updateTodo(todo) { throw new Error('getTodos must be implemented'); }
}

class TodoUseCases extends TodoUseCasesI {
	constructor(todoServices) {
		super();
		this.todoServices = todoServices;
	}

	getTodos() {
		const todos = this.todoServices.getTodos();
		return todos;
	}

	createTodo(todo) {
		const createdTodo = this.todoServices.createTodo(todo);
		return createdTodo;
	}

	updateTodo(todo) {
		const updatedTodo = this.todoServices.updateTodo(todo);
		return updatedTodo;
	}
}

export default TodoUseCases;