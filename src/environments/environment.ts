// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false  ,
  baseApiUrl:'http://localhost:62897/api/',
  firebaseConfig : {
    apiKey: "AIzaSyALEal26eA32jeRlBbfpOSbMdr7pCeCo3E",
    authDomain: "staging-pmmojo.firebaseapp.com",
    databaseURL: "https://staging-pmmojo.firebaseio.com",
    projectId: "staging-pmmojo",
    storageBucket: "",
    messagingSenderId: "631433120599"
  }
};
