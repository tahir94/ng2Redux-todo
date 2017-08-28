import { TODO_SUBMIT } from "./actions";
import { EDIT_TODO } from "./actions"
import { UPDATE_TODO } from "./actions";
import { REMOVE_TODO } from "./actions";
import { tassign } from "tassign";
import { createStore, Action } from 'redux';



export interface IAppState {
	todos: string[];
	currentUserTodo: Object;
	updatedTodos: Object
}


export const INITIAL_STATE: IAppState = {
	todos: [],
	currentUserTodo: {},
	updatedTodos: {},
};

const addTodo = (action, state) => {
	let todo = [...state.todos, action.payload];
	state.currentUserTodo = action.payload;

	console.log(tassign(state, { todos: todo }));
	return tassign(state, { todos: todo })
}

const editTodo = (action, state) => {
	console.log(action.selectedTodo);
	action.selectedTodo = action.payload;
	console.log(action.selectedTodo);
	return tassign(state, { currentUserTodo: action.selectedTodo })
}


const updateTodo = (action, state) => {
	let updatedTodo = state.todos[action.indexNum] = action.payload;
	console.log(updatedTodo);
	console.log(tassign(state, { updatedTodos: updatedTodo }));

	return tassign(state, { currentUserTodo: updatedTodo })
}


const removeTodo = (action, state) => {
	let currentIndex = action.indexNum;
	state.todos.splice(currentIndex, 1);
	console.log(tassign(state, { todos: state.todos }));

	return tassign(state, { todos: state.todos })
}


export function rootReducer(state: IAppState = INITIAL_STATE, action): IAppState {

	switch (action.type) {
		case TODO_SUBMIT: return addTodo(action, state)
		case EDIT_TODO: return editTodo(action, state)
		case UPDATE_TODO: return updateTodo(action, state)
		case REMOVE_TODO: return removeTodo(action, state)
		default:
			return state;
	}
}