import TYPES from './action.types.js';

const initial = {
	loading : true,
	todos : []
};

const reducer = (state=initial, action) => {
	switch (action.type) {
		case TYPES.SET_LOADING: return {...state, loading : true};
		case TYPES.UNSET_LOADING: return {...state, loading : false};
		case TYPES.INIT_TODOS: return {...state, todos: action.payload};
		default: return state;
	}
}

export default reducer;