import React from 'react';
import './CreateTodoForm.css';

const CreateTodoForm = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('create a new todo');
		props.handleInternalSubmit( e.target.todoText.value );
	}

	return (
		<div className='CreateTodoForm'>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						name='todoText'
						placeholder='e.g. Take your dog to walk'
						/>
				</div>
				<button
					type='submit'
				>submit</button>
			</form>
		</div>
	);
}

export default CreateTodoForm;