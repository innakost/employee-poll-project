import { createStore } from 'redux';
import reducer from '../reducers';
import middleware from '../middleware';

// convert object to string and store in localStorage
function saveToLocalStorage(state) {
	try {
		const localState = JSON.stringify(state);
		localStorage.setItem('localState', localState);
	} catch (e) {
		console.warn(e);
	}
}

// load string from localStarage and convert back in to an Object
// invalid output must be undefined
function loadFromLocalStorage() {
	try {
		const localState = localStorage.getItem('localState');
		if (localState === null) return undefined;
		return JSON.parse(localState);
	} catch (e) {
		console.warn(e);
		return undefined;
	}
}

// preload state from local storage
// because state resets each time I type url in address bar
export const store = createStore(reducer, loadFromLocalStorage(), middleware);

store.subscribe(() => saveToLocalStorage(store.getState()));
