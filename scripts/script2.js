let button = document.querySelector(".mybutton");

let modal = document.querySelector(".modal");

let close = document.querySelector(".close");

button.onclick = function(){
   modal.style.display = "block";
   button.style.display = "none";
}

close.onclick = function(){
   modal.style.display = "none";
   button.style.display = "block";
}