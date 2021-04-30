import React, { useEffect } from 'react';
import Todos from './Todos';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { initTodos } from '../core/infrastructure/actions.js';


const App = (props) => {

	const todos = useSelector( store => store.todos );
	const isLoading = useSelector( store => store.loading );

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initTodos());
	}, [])

	return (
		<div className='App'>
			{ isLoading 
				? <p> loading... </p>
				: <Todos todos={todos} />
			}
		</div>
	);
}

export default App;