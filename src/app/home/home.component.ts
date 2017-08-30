import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from "@angular/forms";

import { NgRedux, select } from 'ng2-redux';
import { IAppState } from "../reducers/store"
import { TODO_SUBMIT } from "../actions/actions";
import { EDIT_TODO } from "../actions/actions";
import { UPDATE_TODO } from "../actions/actions";
import { REMOVE_TODO } from "../actions/actions";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    userForm : FormGroup;
	selectedUserTodo;
	isEdited: boolean;
	isEdit_Remove: boolean = true;
	EditRemoveIndex: number;
	userTodo: Object;
    subscription;
	@select('todos') todo;
	@select((s: IAppState) => s.currentUserTodo) todoInput;
	constructor(private ngRedux: NgRedux<IAppState>,
	            private fb : FormBuilder) {
		this.subscription = this.ngRedux.subscribe(() => {
			// console.log(ngRedux.getState());
			this.selectedUserTodo = ngRedux.getState().currentUserTodo;

		})
	}


	ngOnInit() {
		this.userForm = this.fb.group({
			userTodo : '',
            selectedUserTodo : ''
		})
	 }

	 ngOnDestroy(){
		this.subscription.unsubscribe();
	 }


	isDisabled() {
		if (this.userTodo) {
			return false;
		}
		else {
			return true;
		}
	}
	isUpdateDisable(selectedTodo) {
		if (selectedTodo == "") {
			return true;
		}
		else {
			return false;
		}
	}

	submit() {
		this.userTodo = this.userForm.value.userTodo
		this.ngRedux.dispatch({
			type: TODO_SUBMIT,
			payload: this.userTodo
		})
		this.userTodo = "";
	}




	edit(todo, index) {

        this.isEdit_Remove = false;
		this.isEdited = true;
		this.EditRemoveIndex = index;

		this.ngRedux.dispatch({
			type: EDIT_TODO,
			payload: todo,
			indexNum: index,
			selectedTodo: this.selectedUserTodo,
			isEdit: this.isEdited

		})

	}



	update(updatedTodo, index) {
		this.EditRemoveIndex = null;
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
