let lights = document.querySelectorAll(".traffic-light .light");
let colorbutton = document.getElementById("next-button");
let activeColorIndex = 0;

colorbutton.addEventListener('click', function(){
   lights[activeColorIndex].classList.remove('active');
   activeColorIndex = (activeColorIndex+1) % lights.length;
   lights[activeColorIndex].classList.add('active');
});