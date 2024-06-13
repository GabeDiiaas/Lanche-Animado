document.getElementById('botao').addEventListener('click', function() {
    var texto = document.getElementById('receita');
    if (texto.style.display === 'none') {
        texto.style.display = 'block';
    } else {
        texto.style.display = 'none';
    }
});

document.getElementById('botao 2').addEventListener('click', function() {
  var texto = document.getElementById('receita 2');
  if (texto.style.display === 'none') {
      texto.style.display = 'block';
  } else {
      texto.style.display = 'none';
  }
});

document.getElementById('botao 3').addEventListener('click', function() {
  var texto = document.getElementById('receita 3');
  if (texto.style.display === 'none') {
      texto.style.display = 'block';
  } else {
      texto.style.display = 'none';
  }
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000);
}

document.getElementById('playButton').addEventListener('click', function() {
  var audio = document.getElementById('musica');
  audio.play();
});

document.getElementById('playButton 2').addEventListener('click', function() {
  var audio = document.getElementById('musica 2');
  audio.play();
});


document.getElementById('playButton 3').addEventListener('click', function() {
  var audio = document.getElementById('musica 3');
  audio.play();
});
