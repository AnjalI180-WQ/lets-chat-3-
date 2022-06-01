var firebaseConfig = {
      apiKey: "AIzaSyBcQex4KZxhhT1jrNDwdHqukCdq5xRHukw",
      authDomain: "kwitter-e401f.firebaseapp.com",
      databaseURL: "https://kwitter-e401f-default-rtdb.firebaseio.com",
      projectId: "kwitter-e401f",
      storageBucket: "kwitter-e401f.appspot.com",
      messagingSenderId: "595413499597",
      appId: "1:595413499597:web:1a81e49c73ac571899f384",
      measurementId: "G-0C474WW64J"
    };
    
   
  firebase.initializeApp(firebaseConfig);
   
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
