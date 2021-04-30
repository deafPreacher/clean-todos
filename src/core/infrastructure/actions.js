import TodoServicesImpl from '../services/TodoServicesImpl';
import TodoUseCases from '../useCases/TodoUseCases';
import Todo from '../entities/Todo';

import TYPES from './action.types.js';

export const setLoading = () => {
	return {
		type : TYPES.SET_LOADING
	}
}

export const unsetLoading = () => {
	return {
		type : TYPES.UNSET_LOADING
	}
}

export const initTodos = () => {
	return (dispatch) => {
		const todoServices = new TodoServicesImpl();
		const todoUseCases = new TodoUseCases(todoServices);
		
		dispatch( setLoading() );
		
		const todos = todoUseCases.getTodos();
		
		setTimeout(dispatch, 2000, unsetLoading());

		return dispatch({
			type : TYPES.INIT_TODOS,
			payload : todos
		});
	}
}

export const createTodo = (todo) => {
	return (dispatch) => {
		const todoServices = new TodoServicesImpl();
		const todoUseCases = new TodoUseCases(todoServices);
		const todoEntity = new Todo(null, todo.text, todo.status);

		const createdTodo = todoUseCases.createTodo(todoEntity);

		return dispatch({
			type : TYPES.CREATE_TODO,
			payload : createdTodo
		});
	}
}

export const updateTodo = (todo) => {
	return (dispatch) => {

		const todoServices = new TodoServicesImpl();
		const todoUseCases = new TodoUseCases(todoServices);
		const todoEntity = new Todo(todo.id, todo.text, todo.status);

		const updatedTodo = todoUseCases.updateTodo(todoEntity);

		return dispatch({
			type : TYPES.UPDATE_TODO,
			payload : updatedTodo
		});
	}
}