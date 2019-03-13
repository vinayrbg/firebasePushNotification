// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:8000/',
  firebase: {
    apiKey: 'AIzaSyDbnMqPMnE4EgdSEHlIezMx2qvDIEnzDAU',
    authDomain: 'dev-forum-web.firebaseapp.com',
    databaseURL: 'https://dev-forum-web.firebaseio.com',
    projectId: 'dev-forum-web',
    storageBucket: 'dev-forum-web.appspot.com',
    messagingSenderId: '637527593789'
  },
  // tslint:disable-next-line:max-line-length
  fcmAuthHeader: 'AAAAlG-bEz0:APA91bEBtpEd8Cu85TwLVr1N0OZ5kXCY7qO4QfiAPI8AaTvkwaI6HA4N8yBhgfW85xJvuFoCx1TfFh9LKA8gKPBvpwGIQ8qcC-uH7TX6iRRLG1U5mJu_l5GezP2yWkRrEvTE3dF1BdYU'
  // baseUrl: ' http://192.168.5.66:8000/'
};


/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
