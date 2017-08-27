import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from "./routes";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// redux imports
import { NgRedux, NgReduxModule } from 'ng2-redux'
import { IAppState, rootReducer, INITIAL_STATE } from "./store2"
import { AppComponent } from './app.component';

// angularfire imports
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AuthService } from "./providers/auth-service.service";

@NgModule({
	declarations: [
		AppComponent,
		SignupComponent,
		LoginComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		NgReduxModule,
		AppRoutes,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [AuthService],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(ngRedux: NgRedux<IAppState>) {
		ngRedux.configureStore(rootReducer, INITIAL_STATE)
	}
}
