import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from "./routes";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// redux imports
import { NgRedux, NgReduxModule } from 'ng2-redux'
import { IAppState, rootReducer, INITIAL_STATE } from "./reducers/store"
import { AppComponent } from './app.component';

// angularfire imports
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HomeComponent } from './home/home.component';


// material imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule} from '@angular/material';
import {MdInputModule} from '@angular/material';

@NgModule({
	declarations: [
		AppComponent,
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
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MdButtonModule,
		MdInputModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(ngRedux: NgRedux<IAppState>) {
		ngRedux.configureStore(rootReducer, INITIAL_STATE)
	}
}
