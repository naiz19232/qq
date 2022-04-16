var firebaseConfig = {
      apiKey: "AIzaSyDrWl902FvXnVpQacax4weQA99WEqXFvEI",
  authDomain: "samairas-bot-niah.firebaseapp.com",
  databaseURL: "https://samairas-bot-niah-default-rtdb.firebaseio.com",
  projectId: "samairas-bot-niah",
  storageBucket: "samairas-bot-niah.appspot.com",
  messagingSenderId: "880677766141",
  appId: "1:880677766141:web:25753f7fbbf39798048f94",
  measurementId: "G-62VVKD2NMK"
    }
    firebase.initializeApp(firebaseConfig);
    var user_name = localStorage.getItem('ask.2');
    document.getElementById('user').innerHTML = "Welcome " + user_name;
    function add_room_f(){
          room_name = document.getElementById('add_room').value;
          firebase.database().ref("/").child(room_name).update({
            purpose : "add your roomname"  
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";     
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+"onclick='redirect_to_Room_name(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirect_to_Room_name(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("ask.2");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
