import TYPES from './action.types.js';

const initial = {
	loading : false,
	todos : []
};

const reducer = (state=initial, action) => {
	switch (action.type) {
		case TYPES.SET_LOADING: return {...state, loading : true};
		case TYPES.UNSET_LOADING: return {...state, loading : false};
		case TYPES.INIT_TODOS: return {...state, todos: action.payload};
		case TYPES.CREATE_TODO: return {...state, todos: [...state.todos, action.payload]};
		case TYPES.UPDATE_TODO: return {...state, todos: state.todos.map( todo => todo.id === action.payload.id ? action.payload : todo )};
		default: return state;
	}
}

export default reducer;