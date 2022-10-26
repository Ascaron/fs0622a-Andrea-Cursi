document.getElementById('rightArrow').addEventListener('mouseover', function () {
  let gradi = 0;
  document.getElementById('cube1').style.transform += `rotateY(${gradi -= 25}deg)`;
  document.getElementById('cube2').style.transform += `rotateY(${gradi -= 0}deg)`;
  document.getElementById('cube3').style.transform += `rotateY(${gradi -= 0}deg)`;
})

document.getElementById('rightArrow').addEventListener('mouseout', function () {
  let gradi = 0;
  document.getElementById('cube1').style.transform += `rotateY(${gradi += 25}deg)`;
  document.getElementById('cube2').style.transform += `rotateY(${gradi += 0}deg)`;
  document.getElementById('cube3').style.transform += `rotateY(${gradi += 0}deg)`;
})

document.getElementById('leftArrow').addEventListener('mouseover', function () {
  let gradi = 0;
  document.getElementById('cube1').style.transform += `rotateY(${gradi += 25}deg)`;
  document.getElementById('cube2').style.transform += `rotateY(${gradi += 0}deg)`;
  document.getElementById('cube3').style.transform += `rotateY(${gradi += 0}deg)`;
})

document.getElementById('leftArrow').addEventListener('mouseout', function () {
  let gradi = 0;
  document.getElementById('cube1').style.transform += `rotateY(${gradi -= 25}deg)`;
  document.getElementById('cube2').style.transform += `rotateY(${gradi -= 0}deg)`;
  document.getElementById('cube3').style.transform += `rotateY(${gradi -= 0}deg)`;
})

document.getElementById('rightArrow').addEventListener('click', function () {
  let gradi = 0;
  document.getElementById('cube1').style.transform += `rotateY(${gradi -= 90}deg)`;
  document.getElementById('cube2').style.transform += `rotateY(${gradi -= 0}deg)`;
  document.getElementById('cube3').style.transform += `rotateY(${gradi -= 0}deg)`;
})

document.getElementById('leftArrow').addEventListener('click', function () {
  let gradi = 0;
  document.getElementById('cube1').style.transform += `rotateY(${gradi += 90}deg)`;
  document.getElementById('cube2').style.transform += `rotateY(${gradi += 0}deg)`;
  document.getElementById('cube3').style.transform += `rotateY(${gradi += 0}deg)`;
})


/*var slideIndex = 0;
var playing = true;
var btnPlay = document.getElementById('play');

showSlides();

function showSlides() {
  if(playing) {
    var i;
    var slides = document.getElementsByClassName("cube");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.transform = "rotateY(90deg)";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.transform = "rotateY(0deg)";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
}

function toggleSlideshow() {
  if(playing) {
    btnPlay.innerHTML = '&#10074;&#10074;'; // pause character
    playing = false;
  } else {
    btnPlay.innerHTML = '&#9658;'; // play character
    playing = true;
    showSlides();
  }
}

btnPlay.addEventListener('click', toggleSlideshow);*/
/*document.getElementById('icons').addEventListener('click', function(){
  document.getElementById('play').style.pointerEvents='auto';
  while(document.getElementById('play').style.pointerEvents='auto'){
    let gradi = 0;
  document.getElementById('cube1').style.transform += `rotateY(${gradi -= 90}deg)`;
  document.getElementById('cube2').style.transform += `rotateY(${gradi -= 0}deg)`;
  document.getElementById('cube3').style.transform += `rotateY(${gradi -= 0}deg)`;

  if
  }
})*/