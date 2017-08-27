import { TODO_SUBMIT } from "./actions";
import { EDIT_TODO } from "./actions"
import { UPDATE_TODO } from "./actions";
import { tassign } from "tassign";
import { createStore,Action } from 'redux';


export interface IAppState {
todos : string[];
currentUserTodo : Object;
updatedTodos : Object


}


export const INITIAL_STATE : IAppState = {
todos : [],
currentUserTodo : {},
updatedTodos : {}
}

export function rootReducer(state : IAppState = INITIAL_STATE , action ) : IAppState {

   switch(action.type){
    case TODO_SUBMIT :
    let todo = [...state.todos,action.payload];
    state.currentUserTodo = action.payload;
    
    console.log(tassign(state,{todos : todo}));
    return tassign(state,{todos : todo})
    

    case EDIT_TODO :
    
    
    console.log(action.selectedTodo);
    action.selectedTodo = action.payload;
    console.log(action.selectedTodo);
    return tassign(state,{currentUserTodo : action.selectedTodo})
    
    case UPDATE_TODO :
    // console.log(state.todos);
    let updatedTodo = state.todos[action.indexNum] = action.payload;
    console.log(updatedTodo);
    console.log(tassign(state,{updatedTodos : updatedTodo}));
    
    return tassign(state,{updatedTodos : updatedTodo})
 
    
    



    default :
    return state;   
   } 
}