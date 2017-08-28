import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from "../store2"
import { TODO_SUBMIT } from "../actions";
import { EDIT_TODO } from "../actions";
import { UPDATE_TODO } from "../actions";
import { REMOVE_TODO } from "../actions";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	// isUpdate;
	selectedUserTodo;
	isEdited: boolean;
	isEdit_Remove : boolean = true;
	userTodo : Object;

	@select('todos') todo;
	@select((s: IAppState) => s.currentUserTodo) todoInput
	constructor(private ngRedux: NgRedux<IAppState>) {
		this.ngRedux.subscribe(() => {
			console.log(ngRedux.getState());
			this.selectedUserTodo = ngRedux.getState().currentUserTodo;

		})
	}

	ngOnInit() {}

	
	isDisabled() {
		if (this.userTodo) {
			return false;
		}
		else {
			return true;
		}
	}

	submit(userTodo) {
		// this.userTodo = userTodo
		this.ngRedux.dispatch({
			type: TODO_SUBMIT,
			payload: userTodo
		})
		this.userTodo = '';
	}

	edit(todo, index) {
		this.isEdit_Remove = false;
		this.isEdited = true;

		this.ngRedux.dispatch({
			type: EDIT_TODO,
			payload: todo,
			indexNum: index,
			selectedTodo: this.selectedUserTodo,
			isEdit: this.isEdited

		})

	}



	update(updatedTodo, index) {
		this.isEdit_Remove = true;
		this.isEdited = false;
		this.ngRedux.dispatch({
			type: UPDATE_TODO,
			payload: updatedTodo,
			indexNum: index
		})

	}

	remove(todo, index) {
		this.ngRedux.dispatch({
			type: REMOVE_TODO,
			indexNum: index
		})
	}


}
