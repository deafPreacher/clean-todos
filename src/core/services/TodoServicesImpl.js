import Todo from '../entities/Todo';
import TodoServices from '../entities/TodoServices';
import data from './mockData.js';

const validateDTO = (externalObj) => {
	if (!externalObj.text || ! typeof externalObj.id === 'number'){
		throw new Error('validation error. DTO validation failed. id should be a number');
	}
	if (!externalObj.text || ! typeof externalObj.text === 'string'){
		throw new Error('validation error. DTO validation failed. text should be a string');
	}
	if (!externalObj.status || ! typeof externalObj.status === 'boolean'){
		throw new Error('validation error. DTO validation failed. status should be boolean');
	}
}

class TodoServicesImpl extends TodoServices {
	constructor(rootKey='root') {
		super();
		
		this.storage = window.localStorage;
		this.rootKey = rootKey;

		this.syncStorage(data);
	}

	syncStorage(dataset) {
		this.storage.clear();
		const datasetJson = JSON.stringify(dataset);
		this.storage.setItem( this.rootKey, datasetJson );
	}

	getTodos() {
		const datasetJson = this.storage.getItem( this.rootKey );
		const dataset = JSON.parse( datasetJson );
		console.log(dataset);
		dataset.map( item => validateDTO( item ) );
		return dataset.map( item => Todo( item.id, item.text, item.status ) );
	}
}

export default TodoServicesImpl;