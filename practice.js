var firebaseConfig = {
    apiKey: "AIzaSyCqlUy09dqxaoul0XmsOU9efQVTQVY5xhU",
    authDomain: "kwitter-e9c34.firebaseapp.com",
    databaseURL: "https://kwitter-e9c34-default-rtdb.firebaseio.com",
    projectId: "kwitter-e9c34",
    storageBucket: "kwitter-e9c34.appspot.com",
    messagingSenderId: "764761031356",
    appId: "1:764761031356:web:17cf8b4b5c0e09dd1806b9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser() {
    user_name = document.getElementById("user_name").value ;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    }) ;
}  ;