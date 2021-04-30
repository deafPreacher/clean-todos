import Todo from '../entities/Todo';
import TodoServices from '../entities/TodoServices';
// import data from './mockData.js';

const INITIAL_STORAGE = [];

const validateDTO = (externalObj) => {
	const typeOfId = typeof (externalObj.id);
	const typeOfText = typeof (externalObj.text);
	const typeOfStatus = typeof (externalObj.status);
	
	// console.log(externalObj, typeOfId, typeOfStatus, typeOfText);

	if (typeOfId !== 'number'){
		throw new Error('validation error. DTO validation failed. id should be a number');
	}
	if (typeOfText !== 'string'){
		throw new Error('validation error. DTO validation failed. text should be a string');
	}
	if (typeOfStatus !== 'boolean'){
		throw new Error('validation error. DTO validation failed. status should be boolean');
	}
}

class LocalStorageInteractor {
	constructor() {
		this.storage = window.localStorage;
	}

	getItem(key) {
		const result = this.storage.getItem(key);
		if (result) {
			return JSON.parse(result);
		}
		return null;
	}

	setItem(key, value) {
		this.storage.setItem(key, JSON.stringify(value));
	}
}

class TodoServicesImpl extends TodoServices {
	constructor(rootKey='root') {
		super();
		this.rootKey = rootKey;
		this.localStorage = new LocalStorageInteractor();
		this.storage = this.localStorage.getItem( this.rootKey ) || INITIAL_STORAGE;
	}

	getTodos() {
		const todos = this.storage;
		todos.map( todo => validateDTO( todo ) );
		return todos.map( todo => new Todo( todo.id, todo.text, todo.status ) );
	}

	createTodo(todo) {
		const todoDTO = {
			id : this.requestNewId(),
			text : todo.text,
			status : todo.status
		};
		
		validateDTO( todoDTO );
		
		this.storage.push(todoDTO);
		this.syncStorage();

		return todoDTO;
	}

	updateTodo(todo) {
		
		const updatedTodoDTO = {
			id : todo.id,
			text : todo.text,
			status : todo.status
		};
		
		validateDTO( updatedTodoDTO );
		
		this.storage = this.storage.map( todo => todo.id === updatedTodoDTO.id ? updatedTodoDTO : todo );
		this.syncStorage();

		return updatedTodoDTO;
	}

	syncStorage() {
		this.localStorage.setItem( this.rootKey, this.storage );
	}

	requestNewId() {
		const todoIds = this.storage.map( todo => todo.id );
		const maxId = Math.max( ...todoIds, 0 );
		return maxId + 1;
	}

}

export default TodoServicesImpl;