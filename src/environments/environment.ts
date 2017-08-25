// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
		apiKey: "AIzaSyB-edvvhX6-TY8hWvHCHvZ2w2H88FfHBQw",
		authDomain: "ng2redux-todo.firebaseapp.com",
		databaseURL: "https://ng2redux-todo.firebaseio.com",
		projectId: "ng2redux-todo",
		storageBucket: "",
		messagingSenderId: "616466130278"
	}
};
