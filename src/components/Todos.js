import React from 'react';
import Todo from './Todo';
import CreateTodoForm from './CreateTodoForm';

import { useDispatch } from 'react-redux';
import { createTodo, updateTodo } from '../core/infrastructure/actions.js';

import './Todos.css';

const Todos = (props) => {
	const dispatch = useDispatch();
	const handleAddingTodo = (text, status=false) => dispatch( createTodo( { text, status } ) );
	const handleUpdatingTodo = (todo) => {
		const f = (e) => {
			dispatch( updateTodo( { id: todo.id, text: todo.text, status: !todo.status } ) );
		}
		return f;
	}

	return (
		<div className='Todos'>
			<CreateTodoForm handleInternalSubmit={handleAddingTodo}/>
			<ul>
				{ props.todos.map( todo => <li key={todo.id}><Todo todo={todo} handleClick={handleUpdatingTodo(todo)} /></li> ) }
			</ul>
		</div>
	)
}

export default Todos;