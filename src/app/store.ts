import { TODO_SUBMIT } from "./actions";
import { EDIT_TODO } from "./actions"
import { UPDATE_TODO } from "./actions";
import { tassign } from "tassign";
import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
const store = createStore(rootReducer,devToolsEnhancer());

export interface IAppState {
	// userTodo : Object;
	todos: any[];
	// isUpdated : Boolean;
	// selectedTodoItem : any[];
	currentIndex : number;
	userTodo : Object
	

}

export const INITIAL_STATE: IAppState = {
	// userTodo : {},
	todos: [],
	// isUpdated : false,
	// selectedTodoItem : [],
	currentIndex : 0,
	userTodo : {}


	


}
class TodoClass {
	demo = 1;
	static todoItem;
	static allTodos;
    // static selectedTodoItem : any[];
	static selectedIndex;
}



export function rootReducer(state = INITIAL_STATE, action) : IAppState {

	switch (action.type) {
		case TODO_SUBMIT:
			let state1 = state
			let todo = [...state1.todos, action.payload];
			console.log(action.payload);
			state.userTodo = action.payload
			console.log(state.userTodo);
			
			TodoClass.todoItem = action.payload

			let foo = new TodoClass();
			TodoClass.allTodos = todo;
			console.log(TodoClass.allTodos);

			// return tassign(state,{todos : state.todos.concat(action.payload)})
			console.log('object.assign console : ', Object.assign({}, todo));
			return Object.assign({}, state, { todos: todo })


        case EDIT_TODO : 
		console.log(state.userTodo)
		console.log(action.editedTodo);
		let editTodo = {edit : action.editedTodo};
		state.currentIndex = action.editedIndex;
		console.log(Object.assign({},state,{userTodo : state.userTodo = editTodo.edit, EditedTodo : editTodo.edit}));
		
		return Object.assign({},state,{userTodo : state.userTodo = editTodo.edit})
		
        
		case UPDATE_TODO :
		console.log(action.payload);
		console.log(action.indexNumber);
		
		console.log(state.currentIndex)
		let indexNumber = state.currentIndex;
		let currentUserTodo = [state.userTodo];
		let demoTodo = state.todos;
		console.log(currentUserTodo);

		// console.log(Object.assign({},state,{demoTodo : state.userTodo = state.todos[indexNumber] }));
		// return Object.assign({},state,{demoTodo : state.userTodo = state.todos[indexNumber] })
		
		let abc = state.todos[action.indexNumber] = action.payload;
		console.log(abc);
		
		// return tassign(state,{todos : state.todos[action.indexNumber] = action.payload})
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		// return tassign(state,{todos : state.todos[indexNumber] = currentUserTodo})
		// case EDIT_TODO:
	    // state.currentIndex = action.editedIndex;
		// 	console.log(TodoClass.allTodos);
		// 	TodoClass.allTodos.forEach(element => {
		// 		console.log(element);
		// 		if (action.editedTodo == element) {
		// 			console.log(element);
        //          state.selectedTodoItem = element;
		// 		}
		// 		console.log(TodoClass.todoItem)
        //      });
		// 	  let abc = [state.selectedTodoItem]
		// 	 console.log(Object.assign({},state,{ todos : abc }));
		// 	 return Object.assign({},state,{ todos : abc })
			//  return tassign(state,TodoClass.todoItem = TodoClass.selectedTodoItem)
            
			// --------------------------------------------
			// last return
			// return Object.assign({},state,TodoClass.todoItem = TodoClass.selectedTodoItem,state.isUpdated = true)
		// -----------------------------------------



		// if(TodoClass.allTodos == action.editedTodo){
		// 	console.log(TodoClass.allTodos)
		// if(action.payload[0]){
		// 	console.log(TodoClass.allTodos);

		// }
		// }

		//    if(action.payload[0] == TodoClass.allTodos){
		// 	   console.log(TodoClass.allTodos);

		//    }
		//    console.log(state,this.todo = action.payload[0]);


		//  return Object.assign({},state, todo = action.payload[0]);

       
      
		// console.log('asdadsa');
		
		// return Object.assign({},state, state.todos[state.currentIndex] = TodoClass.todoItem)      
       
 



		default:
		return state;
	}

	// return state;
}