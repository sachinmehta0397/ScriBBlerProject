var modal = document.getElementById("SignUpModel");
var modal2 = document.getElementById("SignInModel");

// Get the button that opens the modal
var btn = document.getElementById("mySignup");
var btn2 = document.getElementById("mySignIn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function () {
  modal2.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal){
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal2.style.display = "none";
  }
}
function CloseSignIn() {
  modal2.style.display = 'none';
}

function SignUp () {
  modal.style.display = "block"
}
