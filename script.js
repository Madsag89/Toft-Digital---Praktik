/*----- Burger menu toggle------*/
var active = false;

function navToggle(){
    document.querySelector('.burger').classList.toggle("toggle");
    document.querySelector('.nav-links').classList.toggle("nav-active");
    active = !active;
}

/*----- Klikker man uden for nav-links lukker nav'en ------*/
document.addEventListener('click', function(event) {
    if (active) {
        var isClickInside = document.querySelector('.burger').contains(event.target);

        if (!isClickInside){
            document.querySelector('.burger').classList.toggle("toggle");
            document.querySelector('.nav-links').classList.toggle("nav-active");
            active = !active;
        }
    }
});

/*--------- Slideshow -------*/

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 2000);
}
  /*--------- Video -------*/

  var blooper = document.getElementById('myVideo');
  document.addEventListener('scroll', function myFunction(){
    if (blooper.getBoundingClientRect().bottom < 300 || blooper.getBoundingClientRect().top > 300 )
    blooper.pause();
    else
    blooper.play();

});

/*--------- Kontakt -------*/
  
  document.getElementById('kontakt').addEventListener("click", function() {
  document.getElementById('kontakt-content').innerHTML = 'Tak for din henvendelse. Vi besvarer den hurtigst muligt.';
  var element = document.getElementById('kontakt-animation');
  element.classList.add('kontakt-anime')
  
});

  /*--------- Autoclick -------*/

  function autoClick(){
    alert("For mere information: Ring: 60 22 77 10");
}
  window.onload = function(){
  document.getElementById("autoclickBtn").click()
} 