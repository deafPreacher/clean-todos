import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { initTodos } from './core/infrastructure/actions.js';


const App = (props) => {

	const todos = useSelector( store => store.todos );
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initTodos());
	}, [])

	console.log(todos);

	return (
		<div className='App'>
			<h1>Hello, World!</h1>
		</div>
	);
}

export default App;