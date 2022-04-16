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
    var room_name = localStorage.getItem('room_name');
    function out(){
      localStorage.removeItem("ask.2");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
function send(){
      msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      }); 
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
      console.log(firebase_message_id);
	       console.log(message_data);
             name = message_data['name'];
	       message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name +"<img class='tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output1").innerHTML += row;
      } });  }); }
getData();
function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room_name).child(message_id).update({
		like : updated_likes  
	 });

}