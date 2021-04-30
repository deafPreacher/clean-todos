import React from 'react';
import './Todo.css';

const Todo = (props) => {
	return (
		<div className='Todo'>
			<p onClick={ props.handleClick }>
				{ props.todo.status ? <strike>{props.todo.text}</strike> : props.todo.text }
			</p>
		</div>
	);
}

export default Todo;