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
}

export default TodoUseCases;