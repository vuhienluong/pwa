import * as firebase from 'firebase';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyBhbgwdbvuD2E4NdxnfznNGdQpWsrpwJow",
    authDomain: "vuetify-material-dashboa-4ce96.firebaseapp.com",
    databaseURL: "https://vuetify-material-dashboa-4ce96.firebaseio.com",
    projectId: "vuetify-material-dashboa-4ce96",
    storageBucket: "vuetify-material-dashboa-4ce96.appspot.com",
    messagingSenderId: "83218915806",
    appId: "1:83218915806:web:1269dc57ef7370c213fd4f",
    measurementId: "G-RVK02T6YZK"
}; // 4. Get Firebase Configuration
firebase.initializeApp(config);
console.log('999999999999999999')
const messaging = firebase.messaging();

messaging.usePublicVapidKey("BMFTKWEhS24Vhksq30nGKjS6VFKDcW4tiz--m4jaZZ_43VE2dbCXKc0JG6ruwmlNwDB49fANnIrrIJbnWHjpABY"); // 1. Generate a new key pair

// Request Permission of Notifications
messaging.requestPermission().then(() => {
  console.log('Notification permission granted.');

  // Get Token
  messaging.getToken().then((token) => {
    console.log('aaaa', token)
  })
}).catch((err) => {
  console.log('Unable to get permission to notify.', err);
});
messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    // ...
  });