// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyDIzsABuAqwbkKTEwJstk2vjoF1uj9XZlI",
    authDomain: "todo-1a1f3.firebaseapp.com",
    databaseURL: "https://todo-1a1f3.firebaseio.com",
    projectId: "todo-1a1f3",
    storageBucket: "todo-1a1f3.appspot.com",
    messagingSenderId: "455187217746"
  }
};
