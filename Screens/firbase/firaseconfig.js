import * as firebase from 'firebase';
 export async function connectFirebase() {
    //   // Initialize Firebase
    var config = {
      apiKey: "AIzaSyABbrH6Ca9bF7oecPwn-V9PGQudDL8kQnU",
      authDomain: "groomersbuddy-18109.firebaseapp.com",
      projectId: "groomersbuddy-18109",
      storageBucket: "groomersbuddy-18109.appspot.com",
      messagingSenderId: "708996806244",
      appId: "1:708996806244:web:fdd2a0081a2c5315a1d171",
      measurementId: "G-CY8S50BNP0"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
      console.log('Firebase connected ');
    }
  }