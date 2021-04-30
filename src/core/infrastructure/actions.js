import TodoServicesImpl from '../services/TodoServicesImpl';
import TodoUseCases from '../useCases/TodoUseCases';

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
		
		dispatch( unsetLoading() );

		return dispatch({
			type : TYPES.INIT_TODOS,
			payload : todos
		});
	}
}