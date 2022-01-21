import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDw7kcluOgrpO8FDTl6qJVkq9RaXYH-pN0",
    authDomain: "bos-final.firebaseapp.com",
    projectId: "bos-final",
    storageBucket: "bos-final.appspot.com",
    messagingSenderId: "934356255971",
    appId: "1:934356255971:web:f8e588a3cc79f6252af1d6",
    measurementId: "G-JN3SVY20M2"
};

var app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}else {
  app = firebase.app(); // if already initialized, use that one
}

export const firestore = firebase.firestore(app);
export const auth = app.auth();