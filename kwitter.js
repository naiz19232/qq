function login(){
    ask = document.getElementById('login_name').value; 
    localStorage.setItem('ask.2',ask);
    window.location = 'kwitter_room.html';
}
