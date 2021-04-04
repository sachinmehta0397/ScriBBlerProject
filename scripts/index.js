
//when the user click on create post 
var createPostBtn = document.getElementById("createPost");
var createPostModel = document.getElementById("createPostModel")
var changeWidth = document.getElementsByClassName("modal-content")[2];
var btnChange = document.getElementsByClassName("submitButtons")[2];
var span3 = document.getElementsByClassName("close")[2];
createPostBtn.onclick = function (){
  createPostModel.style.display = "block";
  changeWidth.style.width = "85%";
  btnChange.style.width = "15%";
}
span3.onclick = function () {
  createPostModel.style.display = "none";

}