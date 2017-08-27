import { Component, OnInit,OnDestroy } from '@angular/core';
import { NgRedux,select } from "ng2-redux";
import { IAppState } from "../store";
import { TODO_SUBMIT } from "../actions";
import { EDIT_TODO } from "../actions";
import { UPDATE_TODO } from "../actions";

import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // isUpdate = false;
  isIndex;

  @select('todos') todo;
  @select('userTodo') updatedTodo;
  subscription ;
  userTodo;
  usrTodo;
  indxNum;
  constructor(private ngRedux : NgRedux<IAppState>) {
   this.subscription = ngRedux.subscribe(()=>{
      // this.todoArray = []
      console.log('subscriber console : ',ngRedux.getState());
      console.log('subscriber console : ',ngRedux.getState().userTodo);
      this.usrTodo = ngRedux.getState().userTodo;
      this.indxNum = ngRedux.getState().currentIndex
      // this.todoArray.push(ngRedux.getState().todos)
    })
   }

  ngOnInit() {
  }

  OnDestroy(){
   this.subscription();
  }
  
  todoArray = [];

//   submit(userTodo) {
    

//     this.todoArray.push(userTodo)
//     this.userTodo = '';
//     this.isUpdate = false;
//     }

//   remove(index){
//     this.todoArray.splice(index,1)
//   }


//  edit(todo,index){

//  this.isIndex = index;
//  this.userTodo = todo;
//  this.isUpdate = true;
//   }
//   update(){
//     this.todoArray[this.isIndex] = this.userTodo;
//     this.isIndex = null;
//     this.userTodo = "";
//     this.isUpdate = false;
//   }

update(){
  this.ngRedux.dispatch({
    type : UPDATE_TODO,
    payload : this.usrTodo,
    indexNumber : this.indxNum
  })
}

submit(userTodo){
  this.ngRedux.dispatch({
    type : TODO_SUBMIT,
    payload : userTodo,
    // todoArray : this.todoArray.push(userTodo)
    
  })
  this.userTodo = ''
}
currentTodo;
currentIndex;
isUpdate : Boolean;


edit(todo,i){
this.currentTodo = todo;
this.currentIndex = i;
this.isUpdate = true

  this.ngRedux.dispatch({
  type : EDIT_TODO,
  editedTodo : this.currentTodo,
  editedIndex : this.currentIndex,
  isUpdated : this.isUpdate
})


}

}
