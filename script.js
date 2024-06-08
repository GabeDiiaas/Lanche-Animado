//*botao texto*//
document.getElementById('botao').addEventListener('click', function() {
    var texto = document.getElementById('receita');
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
  setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}

document.getElementById('myButton').addEventListener('click', function() {
    var outputText = document.getElementById('outputText');
    outputText.textContent = 'Texto exibido ao clicar no botão!';
    outputText.style.display = 'block';
});