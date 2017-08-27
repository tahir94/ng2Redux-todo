import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl } from "@angular/forms"
import { NgRedux ,select } from "ng2-redux";
import { IAppState } from "../store";
// import { SIGNUP_SUBMIT } from '../actions';
import { AuthService } from "../providers/auth-service.service"
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm : FormGroup;
  constructor(private fb : FormBuilder,
	          private authService : AuthService,
              private ngRedux : NgRedux<IAppState> ) { }

  ngOnInit() {
	 
	this.signupForm = this.fb.group({
		email : '',
		password : ''
	})
  }

  signup(){

	  // this.authService.signupData(this.signupForm.value)
	  // this.ngRedux.dispatch({
	  // type : SIGNUP_SUBMIT,
	  // payload : this.signupForm.value 		  
	  // })
	//  console.log(this.signupForm.value);
	  

  }

}
