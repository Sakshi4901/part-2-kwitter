var firebaseConfig = {
    apiKey: "AIzaSyA_7FwqYRhVyNSXrXD8-hwEJ0wIbjj3UfQ",
    authDomain: "practice-app-18dff.firebaseapp.com",
    databaseURL: "https://practice-app-18dff-default-rtdb.firebaseio.com",
    projectId: "practice-app-18dff",
    storageBucket: "practice-app-18dff.appspot.com",
    messagingSenderId: "1074845455576",
    appId: "1:1074845455576:web:2ccd4d6d496640857673ad"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome"+ user_name;
    function addroom()
    {room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name" });
      localStorage.setItem("room_name", room_name);
       window.location = "kwitter_page.html";
    
}
