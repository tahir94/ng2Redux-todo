import { SIGNUP_SUBMIT } from "./actions"

export interface IAppState {
submitSignup : Object;
}

export const INITIAL_STATE : IAppState = {
	submitSignup : {}
}

export function rootReducer(state : IAppState,action){
	
   switch(action.type){
	case SIGNUP_SUBMIT :
    // return {submitSignup : state.submitSignup}
    console.log(action.payload)
	default : 
	return state;
   }

	// return state;
}