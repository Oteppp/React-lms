import firebase from 'firebase';

 var firebaseConfig = {
  apiKey: "AIzaSyCi2zfQJd1NJbwjpysTG8EiYVMJA2ICXHI",
  authDomain: "login-5ef70.firebaseapp.com",
  projectId: "login-5ef70",
  storageBucket: "login-5ef70.appspot.com",
  messagingSenderId: "426092816268",
  appId: "1:426092816268:web:2f8ac21e6dc0bed37e98a9",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;