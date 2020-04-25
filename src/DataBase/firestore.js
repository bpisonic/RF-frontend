import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAVim8GaNlBw-m6lar2IiiGQY5rHxq6lTY",
    authDomain: "roommate-finder-b8692.firebaseapp.com",
    databaseURL: "https://roommate-finder-b8692.firebaseio.com",
    projectId: "roommate-finder-b8692",
    storageBucket: "roommate-finder-b8692.appspot.com",
    messagingSenderId: "850047757921",
    appId: "1:850047757921:web:091c11c0bfe75660754420"
  };
  // Initialize Firebase
  const firebaseApp= firebase.initialize(firebaseConfig);


export default firebaseApp.firestore()