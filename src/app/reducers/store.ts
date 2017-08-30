import { TODO_SUBMIT } from "../actions/actions";
import { EDIT_TODO }   from "../actions/actions"
import { UPDATE_TODO } from "../actions/actions";
import { REMOVE_TODO } from "../actions/actions";
import { tassign }     from "tassign";
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

export const addTodo = (action, state) => {
	let todo = [...state.todos, action.payload];
	state.currentUserTodo = action.payload;

	return tassign(state, { todos: todo })
}

export const editTodo = (action, state) => {
	action.selectedTodo = action.payload;

	return tassign(state, { currentUserTodo: action.selectedTodo })
}


export const updateTodo = (action, state) => {
	let updatedTodo = state.todos[action.indexNum] = action.payload;

	return tassign(state, { currentUserTodo: updatedTodo })
}


export const removeTodo = (action, state) => {
	let currentIndex = action.indexNum;
	state.todos.splice(currentIndex, 1);

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