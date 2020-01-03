// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyBhbgwdbvuD2E4NdxnfznNGdQpWsrpwJow",
    authDomain: "vuetify-material-dashboa-4ce96.firebaseapp.com",
    databaseURL: "https://vuetify-material-dashboa-4ce96.firebaseio.com",
    projectId: "vuetify-material-dashboa-4ce96",
    storageBucket: "vuetify-material-dashboa-4ce96.appspot.com",
    messagingSenderId: "83218915806",
    appId: "1:83218915806:web:1269dc57ef7370c213fd4f",
    measurementId: "G-RVK02T6YZK"
});
console.log('123')
// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]
console.log('456')